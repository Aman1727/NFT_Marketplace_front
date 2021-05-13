import React from 'react'
import "../../Assets/css/custom.css"
import Identicon from 'react-identicons';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import {Collectibles,Buckets} from "../../scripts/index"
import { Skeleton } from '@material-ui/lab';
import {  useSelector } from 'react-redux';
import {getSignerAndProvider} from "../../utils/metamask"
import axios from 'axios';
import { ethers } from 'ethers';

const UserProfile = (props) => {
  const details = useSelector(state=> state.profileReducer);
  let history = useHistory()
  const [tab, setTab] = React.useState(0);
  const [cover,setCover] = React.useState(null)
  const [items,setItems] = React.useState([]);
  const [itemonsale,setItemonsale] = React.useState([]);
  const [img,setImg] = React.useState("");
  const [name,setName] = React.useState("");


 
  React.useEffect(async () => {
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
      });
      getCoverImg();
      let wallet = await getSignerAndProvider();
      let col = new Collectibles(wallet.provider, wallet.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
      let buck = new Buckets();
      setItems([])

      setItemonsale([])
      try {
        let tokenarray = await col.getTokenIdsByOwner(props.match.params.id);
        console.log("tokenarray",tokenarray)
        let tokenuri = await col.getTokenURIsByIds(tokenarray);
        console.log("tokenuri", tokenuri)
        setItems(tokenuri);

        let tokenarray1 = await col.getTokenIdsForSaleByOwner(props.match.params.id);
        console.log("tokenarray",tokenarray1)
        let tokenuri1 = await col.getTokenURIsByIds(tokenarray1);
        console.log("tokenuri", tokenuri1)
        setItemonsale(tokenuri1);


        let temp = [];
        for (let i = 0; i < tokenuri.length; i++) {
          let jsonoutput = await buck.pullJSON(tokenuri[i])
          let price_item = await col.getTokenPriceByIds([tokenarray[i]])
          console.log("price_item",price_item);
          temp.push({
            token:tokenarray[i],
            ...jsonoutput,
            price:ethers.utils.formatEther(price_item[0])
          })
        }
        console.log(temp)
        setItems(temp);

        let temp1 = [];
        for (let i = 0; i < tokenuri1.length; i++) {
          let jsonoutput1 = await buck.pullJSON(tokenuri1[i])
          let item_price = await col.getTokenPriceByIds([tokenarray1[i]])
          temp1.push({
            token:tokenarray1[i],
            ...jsonoutput1,
            price:ethers.utils.formatEther(item_price[0])
          })
        }
        setItemonsale(temp1);
        
      } catch (e) {
        console.log("error", e)
      }
  }, [])

  

  const getCoverImg=()=>{
      axios.post(process.env.REACT_APP_BASEURL+"users/getprofile", { address: props.match.params.id })
            .then(res => {
              if (res.data.status) {
                setName(res.data.user.name);
                setImg(process.env.REACT_APP_BASEURL + res.data.user.profile_img);
                setCover(process.env.REACT_APP_BASEURL + res.data.user.cover_img);
              }
            })
            .catch(e => {
              console.log(e)
            })
          
  }

  

  return (
    
    <div >
      
      <div className="custom-container">

        <div className="section-one">
          <div className="row">
            <div className="col-md-12" style={{ backgroundImage: `url(${!cover?"Assets/images/bg.jpg":cover})`, minHeight: 300,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover" }}>
              
            </div>
            <div className="col-md-12" >
              <center>
                <div className="ProfileImage" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "white",overflow:"hidden" }}>
                  {!img?<Identicon string={props.match.params.id} size={100}/>:<img style={{width:200,height:200}} src={img}/>}
                </div>
              </center>

            </div>
            <div className="col-md-12" >
              <center>
                <h3 style={{ fontSize: 20, fontWeight: "bold",marginTop:10 ,textTransform:"capitalize"}}>
                  {name?name:""}
                </h3>
                <h3 style={{ fontSize: 18, fontWeight: "bold",marginTop:10 }}>
                  {props.match.params.id.substring(0, 20) + "..." + props.match.params.id.substring(props.match.params.id.length - 5, props.match.params.id.length - 1)}
                </h3>
                

              </center>
            </div>
            
            <div className="col-md-12" >
              <br />
              <br />
              <br />
            </div>

            <div className="col-md-6">


              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={tab === 0 ? "nav-link active" : "nav-link"} onClick={() => setTab(0)}>Onsale</a>
                </li>
                <li className="nav-item">
                  <a className={tab === 1 ? "nav-link active" : "nav-link"} onClick={() => setTab(1)}>Collectible</a>
                </li>
              </ul>
              </div>
              <div className="col-md-12">
              <div  className="tab-content" >
                {tab===1&&
                <Grid container>
                {items.map((item,i)=>
                  <div className="card" style={{ width: 220,height:350,margin:30 }}>
                    {item.name?
                    <>
                    <div className="card-media h-16em">
                      <div className="card-media-overly"></div>
                      <img src={item.filelink} alt="" className="" />
                    </div>
                    <div className="card-body">
                      <a className="flex font-semibold text-lg truncate"> {item.name} </a>

                      <div className="flex mt-2 space-x-2">
                        <div className="flex items-center -space-x-2 -mt-1">
                        {/* <img alt="Image placeholder" src="Assets/images/avatars/avatar-6.jpg" className="border-2 border-white rounded-full w-7" />
                          <img alt="Image placeholder" src="Assets/images/avatars/avatar-5.png" className="border-2 border-white rounded-full w-7" /> */}
                        </div>
                        <div className="flex leading-4 text-sm">
                          <div><strong> {"Category: "+item.category}</strong></div>
                        </div>
                      </div>
                      <div className="flex mt-3 space-x-2 text-sm">
                      
                       
                      </div>
                    </div>
                    </>:
                    <div>
                    <Skeleton variant="rect" width={200} height={250} />
                    <Skeleton variant="text" />
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="text" />
                    
                  </div>
                    }
                  </div>
                  )}
                  </Grid>}
                  {tab===0&&
                <Grid container>
                {itemonsale.map((item,i)=>
                  <div className="card" style={{ width: 220,height:350,margin:30 }}>
                    {item.name?
                    <>
                    <div className="card-media h-16em" onClick={()=>history.push(`/details/sale/${item.token.toString()}`)}>
                      <div className="card-media-overly"></div>
                      <img src={item.filelink} alt="" className="" />
                    </div>
                    <div className="card-body">
                      <a className="flex font-semibold text-lg truncate"> {item.name} </a>

                      <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                
                                                <a> <span style={{fontWeight:700}}>{parseInt(item.price)?("Price: "+item.price+" ETH"):""}</span> </a>
                                            </div>
                      <div className="flex mt-2 space-x-2">
                        <div className="flex leading-4 text-sm">
                          <div><strong> {item.category}</strong></div>
                        </div>
                      </div>
                      
                    </div>
                    </>:
                    <div>
                    <Skeleton variant="rect" width={200} height={250} />
                    <Skeleton variant="text" />
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton variant="text" />
                    
                  </div>
                    }
                  </div>
                  )}
                  </Grid>}
              </div>
            </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default UserProfile
