import { ethers } from 'ethers';
import React from 'react'
import {getSignerAndProvider} from "../../utils/metamask"
import {Collectibles,Buckets,Auction} from "../../scripts/index"
import axios from 'axios';
import { Skeleton } from '@material-ui/lab';
import { useHistory } from "react-router-dom";


const Details = (props) => {
    let history = useHistory()
    const [name,setName] = React.useState(null)
    const [desc,setDesc] = React.useState(null)
    const [owner,setOwner] = React.useState(null)
    const [creator,setCreator] = React.useState(null)
    const [img,setImg] = React.useState(null)
    const [royalty,setRoyalty] = React.useState(null)
    const [highbid,setHighbid] = React.useState(null)
    const [highbider,setHighbider] = React.useState(null)
    const [price,setPrice] = React.useState(null)
    const [creatorimg,setCreatorimg] = React.useState(null)
    const [bidderimg,setBidderimg] = React.useState(null)
    const [ownerimg,setOwnerimg] = React.useState(null)
    const [time,setTime] = React.useState(null)
    const [owneradd,setOwneradd] = React.useState(null)
    const [creatoradd,setCreatoradd] = React.useState(null)
    const [bidderadd,setBidderadd] = React.useState(null)

    React.useEffect(async()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          });
          let token=ethers.BigNumber.from(props.match.params.id)
          let wallet = await getSignerAndProvider();
          let col = new Collectibles(wallet.provider, wallet.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
          let buck = new Buckets();
          let tokenuri = await col.getTokenURIsByIds([token]);
          let json = await buck.pullJSON(tokenuri[0])
          let owneraddress= await col.ownerOf(token)
          console.log("owneraddress",owneraddress);
          setOwneradd(owneraddress.toLowerCase())
          setName(json.name)
          setDesc(json.description)
          setImg(json.filelink)
          axios.post(process.env.REACT_APP_BASEURL+"admin/getuser",{address:owneraddress.toLowerCase()})
          .then(res => {
              setOwner(res.data.name)
              setOwnerimg(process.env.REACT_APP_BASEURL+res.data.profile_img)
          })
          .catch(e => {
            console.log(e)
          })
          let creatoraddress= await col.creatorOf(token)
          console.log("creatoraddress",creatoraddress);
          setCreatoradd(creatoraddress.toLowerCase())
          setName(json.name)
          setDesc(json.description)
          setImg(json.filelink)
          axios.post(process.env.REACT_APP_BASEURL+"admin/getuser",{address:creatoraddress.toLowerCase()})
          .then(res => {
              setCreator(res.data.name)
              setCreatorimg(process.env.REACT_APP_BASEURL+res.data.profile_img)
              
          })
          .catch(e => {
            console.log(e)
          })

          let royaltypercent = await col.tokenRoyaltyPercent(token)
          setRoyalty(royaltypercent.toString())
          
          if(props.match.params.type==='auction'){
              console.log("address",props.match.params.address)
            let auc = new Auction(wallet.provider, wallet.signer, props.match.params.address);
            let hb = await auc.getHighestBid();
            let hbder = await auc.getHighestBidder();
            setHighbid(ethers.utils.formatEther(hb))
            let current_block= await wallet.provider.getBlockNumber();
            let end_block= await auc.getEndBlock();
            let secs=(parseInt(end_block.toString())-parseInt(current_block))*15
            let time = Math.floor(secs/(3600*24))+" days "+Math.floor((secs/(3600))%24)+" hours left"
            setTime(time);
            console.log("hb",ethers.utils.formatEther(hb))
            console.log("hbder",hbder)
            setBidderadd(hbder.toLowerCase())
            axios.post(process.env.REACT_APP_BASEURL+"admin/getuser",{address:hbder.toLowerCase()})
            .then(res => {
                setHighbider(res.data.name)
                setBidderimg(process.env.REACT_APP_BASEURL+res.data.profile_img)
            })
            .catch(e => {
                console.log(e)
            })
          }
          else if(props.match.params.type==='sale'){
            let price=await col.getTokenPriceByIds([token])
            setPrice(ethers.utils.formatEther(price[0]));
          }
          else{

          }
    },[])

    const placeabid=async()=>{
        let bid=(parseFloat(highbid)+0.001).toString()
        console.log("bid",bid)
        let wallet = await getSignerAndProvider();
        let auc = new Auction(wallet.provider, wallet.signer, props.match.params.address);
        console.log("address", props.match.params.address)
        let pb = await auc.placeBid(bid);
        console.log("pb",pb)
        let hb = await auc.getHighestBid();
        let hbder = await auc.getHighestBidder();
        setHighbid(ethers.utils.formatEther(hb))
        console.log("hb",hb)
        console.log("hbder",hbder)
        axios.post(process.env.REACT_APP_BASEURL+"admin/getuser",{address:hbder.toLowerCase()})
        .then(res => {
            setHighbider(res.data.name)
            setBidderimg(process.env.REACT_APP_BASEURL+res.data.profile_img)
            
        })
        .catch(e => {
            console.log(e)
        })
    }

    const purchase=async()=>{
        let token=ethers.BigNumber.from(props.match.params.id)
        let {provider,signer} = await getSignerAndProvider();
        let col = new Collectibles(provider, signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
        const price = await col.getTokenPriceWithFeesById(token);
        console.log("price",price)
        let tx = await col.buy(token, price)
        console.log(tx)
    }
    return (
        <div>
            <div id="wrapper">
            
            <div class="custom-container">
                
                <div class="section-one">
                    <div class="row">

                        <div class="col-md-8 pad_50">
                            {/* <div class="text-right">
                                <button class="btn btn-outline-secondary">Like</button>
                                <button class="btn btn-outline-secondary">Save</button>
                            </div> */}

                            <center>
                            {img?<img src={img} style={{height:400,width:400,objectFit:"contain"}}/>:
                            <Skeleton variant="rect" width={400} height={400} />
                            }
                            </center>
                        </div>
                        <div class="col-md-4">

                            <div class="flex ShadowBox pad_10">
                                {name?
                                <div style={{fontSize:22,fontWeight:700}}>
                                    <h3 style={{textTransform:"capitalize"}}>{name}</h3>
                                </div>
                                :
                                <Skeleton variant="rect" width={200} height={20} />
                                }
                                {/* <div >
                                    <button class="btn btn-outline-secondary">
                                        share
                                    </button>
                                </div> */}
                            </div>
                            <div class="DetailScroll pad_10" style={{fontSize:20,fontWeight:600,textAlign:"left",height:250,border:"solid 1px grey"}}>
                                
                                {/* History:{user}<br/> */}
                                {desc?
                                <>
                                <div style={{fontSize:16}}>Description<br/>{desc} </div>
                                <br/><br/>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                {props.match.params.type!=="auction"&&
                                <div style={{marginRight:50,cursor:"pointer"}} onClick={()=>history.push(`/user/${owneradd}`)}>
                                <span style={{fontSize:16 }}>Owner</span><br/>
                                <span style={{display:"flex",flexDirection:"row",alignItems:"center",textTransform:"capitalize",marginTop:10}}><img src={ownerimg} style={{width:50,height:50,borderRadius:25,marginRight:20,overflow:"hidden",background:"grey"}}/>{owner}</span><br/>
                                </div>}
                                <div style={{cursor:"pointer"}} onClick={()=>history.push(`/user/${creatoradd}`)}>
                                <span style={{fontSize:16}}>Creator</span><br/>
                                <span style={{display:"flex",flexDirection:"row",alignItems:"center",textTransform:"capitalize",marginTop:10}}><img src={creatorimg} style={{width:50,height:50,borderRadius:25,marginRight:20,overflow:"hidden",background:"grey"}}/>{creator}</span>
                                </div>
                                </div>
                                <br/>

                                <div style={{textAlign:"center",fontSize:16,background:"rgba(254, 218, 3, 0.1)",borderRadius:5}}>{royalty}% of sales will go to creator<br/></div>
                                </>
                                :
                                <>
                                <Skeleton variant="text" />
                                <Skeleton variant="rect" width={200} height={100} />
                                <Skeleton variant="text" />
                                <Skeleton variant="circle" width={40} height={40} />
                                <Skeleton variant="text" />
                                </>
                                }          
                            </div>


                            
                            {props.match.params.type==='auction'&&
                            <>
                            {time?
                            <div class=" ShadowBox pad_10" style={{fontSize:16,fontWeight:600,textAlign:"left"}}>
                                    Highest bid by {highbider}<span style={{display:"flex",flexDirection:"row",alignItems:"center",textTransform:"capitalize",marginTop:10,fontSize:20,cursor:"pointer"}} onClick={()=>history.push(`/user/${bidderadd}`)}><img src={bidderimg} style={{width:50,height:50,borderRadius:25,marginRight:20,overflow:"hidden"}}/>{highbid+" ETH"} </span>
                                    <br/>
                                <div>{time}</div><br/>
                                <div onClick={placeabid} class="btn btn-primary btn-lg btn-block">Place Bid</div>
                            </div>
                            :
                            <>
                            <Skeleton variant="text" />
                            <Skeleton variant="circle" width={40} height={40} />
                            <Skeleton variant="text" />
                            </>}
                            </>
                            }
                            

                            {props.match.params.type==='sale'&&
                            <>
                            {price?
                             <div class=" ShadowBox pad_10">
                                 <p style={{fontSize:20,fontWeight:600,color:"red"}}>Price :{price+" Eth"}<br/></p>
                                 <p style={{fontSize:20,fontWeight:600}}>+<br/></p>
                                 <p style={{fontSize:15}}>Royalty {royalty}%+ Service Fee(2.5%) <br/><br/></p>
                                <div onClick={purchase} class="btn btn-primary btn-lg btn-block">Purchase</div>
                            </div>
                            :
                            <>
                            <Skeleton variant="text" />
                            <Skeleton variant="circle" width={40} height={40} />
                            <Skeleton variant="text" />
                            </>
                            }
                            </>
                            }
                        </div>
                        

                    </div>
                </div>
                
            </div>




        </div>
        </div>
    )
}

export default Details
