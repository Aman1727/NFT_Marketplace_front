import React from 'react'
import {Collectibles,Buckets,Auction} from "../../scripts/index"
import {  useSelector,useDispatch } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import {setSaleitems,setAuctionitems} from "../../redux/actions/actions"
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {getSignerAndProvider} from "../../utils/metamask"
import { ethers } from 'ethers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const details = useSelector(state=> state.profileReducer.account);
    const saleitems = useSelector(state=> state.saleReducer.items);
    const auctionitems = useSelector(state=> state.auctionReducer.auctions);
    const [items,setItems] = React.useState([]);
    const [users,setUsers] = React.useState([]);
    const [auctions,setAuctions] = React.useState([]);
    const [category,setCategory] = React.useState("All");
    const [open,setOpen] = React.useState(false);


    React.useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          });

        axios.post(process.env.REACT_APP_BASEURL+"admin/getusers")
          .then(res => {
            setUsers(res.data)
          })
          .catch(e => {
            console.log(e)
          })
          getData()
    },[])


    React.useEffect(async () => {
        if (details) {
            
            getData()
        }
      }, [details])
      
      const getData=async()=>{
        console.log(details)
        let wallet = await getSignerAndProvider();
        let col = new Collectibles(wallet.provider, wallet.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
        let buck = new Buckets();
        let saletoken1;
        setItems([])
        setAuctions([])
        
  
        try {
          let saletoken = await col.getTokenIdsForSale();
          console.log("result",saletoken)
          let tokenuri = await col.getTokenURIsByIds(saletoken);
          console.log("tokenuri",tokenuri)
          setItems(tokenuri);
          saletoken1 = await col.getAllAuctions();
          setAuctions(saletoken1);
          let temp = [];
          for (let i = 0; i < tokenuri.length; i++) {
            let jsonoutput = await buck.pullJSON(tokenuri[i])
            console.log("json",jsonoutput)
            let item_price = await col.getTokenPriceByIds([saletoken[i]])
            console.log("item_price",ethers.utils.formatEther(item_price[0]));
            temp.push({
              ...jsonoutput,
              token:saletoken[i],
              price:ethers.utils.formatEther(item_price[0]),
              
              
            })
          }
          console.log("temp",temp);
          dispatch(setSaleitems(temp));
        } catch (e) {
          console.log("error", e)
          
        }

        try {
            
            
            
            let temp1 = [];
            var i = 0;
            let current_block= await wallet.provider.getBlockNumber();
            console.log("current_block",current_block);
            for (const address of saletoken1) {
                console.log("address",address)
                let auc = new Auction(wallet.provider, wallet.signer, address);
                let token1 =await auc.getTokenId();
                let price = await auc.getHighestBid();
                console.log("token",token1);
                let tokenuri1 = await col.getTokenURIsByIds([token1]);
                let jsonoutput1= await buck.pullJSON(tokenuri1[0])
                let end_block= await auc.getEndBlock();
                console.log("end_block",end_block.toString());
                let secs=(parseInt(end_block.toString())-parseInt(current_block))*15
                let time = Math.floor(secs/(3600*24))+" days "+Math.floor((secs/(3600))%24)+" hours left"
                temp1.push({
                    token:token1,
                    ...jsonoutput1,
                    address,
                    price:ethers.utils.formatEther(price),
                    time
                  })
                i++;
            }
            
            dispatch(setAuctionitems(temp1));

            
            
          } catch (e) {
            console.log("error", e)
            
          }
      }

      const purchase=async(token)=>{
          
        if(!localStorage.getItem("address")){
            history.push("/connect")
        }
        else{
        try{
        let {provider,signer} = await getSignerAndProvider();
        let col = new Collectibles(provider, signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
        const price = await col.getTokenPriceWithFeesById(token);
        console.log("price",price)
        let tx = await col.buy(token, price)
        console.log(tx)
        getData();
        }
        catch(e){
            setOpen(true)
        }
        }
      }

      const placeabid=async(highbid,address)=>{
        try{
          console.log("highbid",parseInt(highbid))
        let bid=(parseFloat(highbid)+0.001).toString()
        console.log("bid",bid)
        let wallet = await getSignerAndProvider();
        let auc = new Auction(wallet.provider, wallet.signer, address);
        console.log("address",address)
        let pb = await auc.placeBid(bid);
        console.log("pb",pb)
    }
    catch(e){
        setOpen(true)
    }
    }

      


    return (
        <div>
            <div id="wrapper">
            
            <div className="custom-container">
                <div className="section-one" id="section-one">
                    <div className="relative -mt-3 uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                            {items.map((item,i)=>
                                saleitems[i]?
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card" >
                                        <div className="card-media h-16em" onClick={()=>history.push(`/details/sale/${saleitems[i].token.toString()}`)}>
                                            <div className="card-media-overly"></div>
                                            <img src={saleitems[i].filelink} alt="" className="" />
                                            {/* <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div> */}
                                        </div>
                                        <div className="card-body">
                                            <a className="flex font-semibold text-lg truncate capitalize"> {saleitems[i].name} </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a> <span>price:  </span> </a>
                                                <a> <span style={{fontWeight:700}}>{saleitems[i].price+" ETH"}</span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                
                                                <div className=" leading-4 text-sm">
                                                    <div><strong>Category: {saleitems[i].category}</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a style={{cursor:"pointer"}} onClick={()=>purchase(saleitems[i].token)} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>:
                                <div>
                                <Skeleton variant="rect"  height={250} />
                                <Skeleton variant="text" />
                                <Skeleton variant="circle" width={40} height={40} />
                                <Skeleton variant="text" />
                                </div>
                                )}
                            </ul>
                        </div>
                        <a className="absolute bg-white top-9em flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" uk-slider-item="previous">
                            <i className="icon-feather-chevron-left"></i>
                        </a>
                        <a className="absolute bg-white top-9em flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" uk-slider-item="next">
                            <i className="icon-feather-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="top-sellers" id="top_sellers">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 style={{textAlign:"left",fontSize:30}} className="text-xl font-semibold primary-color">Top Sellers</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Top Sellers You Might Be Interested In.</p>
                        </div>
                        
                    </div>
                    <div className="grid md:grid-cols-4 divide divide-gray-200 gap-x-4 mt-4">
                        {/* {users.map((item)=>
                        <div style={{cursor:"pointer"}} className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2" onClick={()=>history.push("/user/"+item.address)}>
                            <div className="w-14 h-14 flex-shrink-0 rounded-md relative"><img src={process.env.REACT_APP_BASEURL+item.profile_img} className="absolute w-full h-full inset-0 rounded-md object-cover" alt="" /></div>
                            <div className="flex-1">
                                <a className="text-lg font-semibold capitalize" > {item.name} </a>
                               
                            </div>
                        </div>)} */}
                        
                    </div>
                </div>
                <div className="hot_bids" id="live_auction">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 style={{textAlign:"left",fontSize:30}} className="text-xl font-semibold primary-color">Live Auctions 🔥</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Live Auctions You Might Be Interested In.</p>
                        </div>
                        
                    </div>
                    <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                {auctions.map((item,i)=>
                                auctionitems[i]?
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card" >
                                    <div style={{position:"absolute",top:225,left:10,background:"white",paddingLeft:5,paddingRight:5,zIndex:99,borderRadius:20,border:"solid 1px red"}}>{auctionitems[i].time}</div>
                                        <div className="card-media h-16em" onClick={()=>history.push(`/details/auction/${auctionitems[i].token.toString()}/${auctionitems[i].address.toLowerCase()}`)}>
                                            <div className="card-media-overly"></div>
                                            <img src={auctionitems[i].filelink} alt="" className="" />
                                            
                                            {/* <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div> */}
                                        </div>
                                        <div className="card-body">
                                            
                                            <a className="font-semibold text-lg truncate capitalize" style={{display:"flex"}}> {auctionitems[i].name} </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a> <span>Highest Bid:  </span> </a>
                                                <a> <span style={{fontWeight:700}}>{auctionitems[i].price+" ETH"}</span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                
                                                <div className=" leading-4 text-sm">
                                                    <div><strong>Category: {auctionitems[i].category}</strong></div>
                                                </div>
                                            </div>
                                            <div className=" mt-3 space-x-2 text-sm" >
                                                <a style={{cursor:"pointer"}} onClick={()=>placeabid(auctionitems[i].price,auctionitems[i].address.toLowerCase())} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Place a Bid
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>:
                                <div>
                                <Skeleton variant="rect"  height={250} />
                                <Skeleton variant="text" />
                                <Skeleton variant="circle" width={40} height={40} />
                                <Skeleton variant="text" />
                                </div>
                                )}
                                </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="hot_bids" id="hot_bids">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 style={{textAlign:"left",fontSize:30}} className="text-xl font-semibold primary-color">Hot Bids 💥</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Hot Bids You Might Be Interested In.</p>
                        </div>
                        
                    </div>
                    <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                {items.map((item,i)=>
                                saleitems[i]?
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card" >
                                        <div className="card-media h-16em" onClick={()=>history.push(`/details/sale/${saleitems[i].token.toString()}`)}>
                                            <div className="card-media-overly"></div>
                                            <img src={saleitems[i].filelink} alt="" className="" />
                                            {/* <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div> */}
                                        </div>
                                        <div className="card-body">
                                            <a className="flex font-semibold text-lg truncate capitalize"> {saleitems[i].name} </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a> <span>price:  </span> </a>
                                                <a> <span style={{fontWeight:700}}>{saleitems[i].price+" ETH"}</span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                
                                                <div className=" leading-4 text-sm">
                                                    <div><strong>Category: {saleitems[i].category}</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a style={{cursor:"pointer"}} onClick={()=>purchase(saleitems[i].token)} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>:
                                <div>
                                <Skeleton variant="rect"  height={250} />
                                <Skeleton variant="text" />
                                <Skeleton variant="circle" width={40} height={40} />
                                <Skeleton variant="text" />
                                </div>
                                )}
                                </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hot_bids" id="sports_bids">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 style={{textAlign:"left",fontSize:30}} className="text-xl font-semibold primary-color">Sports NFT ⚽️</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Sports NFT You Might Be Interested In.</p>
                        </div>
                        
                    </div>
                    <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                {saleitems.map((item,i)=>
                                item.category==="Sports"?
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em" onClick={()=>history.push(`/details/sale/${saleitems[i].token.toString()}`)}>
                                            <div className="card-media-overly"></div>
                                            <img src={saleitems[i].filelink} alt="" className="" />
                                            {/* <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div> */}
                                        </div>
                                        <div className="card-body">
                                            <a className="flex font-semibold text-lg truncate capitalize"> {saleitems[i].name} </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a> <span>Price : </span> </a>
                                                <a> <span style={{fontWeight:700}}> {saleitems[i].price+" ETH"}</span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                
                                                <div className="flex-1 leading-4 text-sm">
                                                    <div><strong> {saleitems[i].category}</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a style={{cursor:"pointer"}} onClick={()=>purchase(saleitems[i].token)} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>:
                                null
                                )}
                                </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="hot-collection" id="hot-collection">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 style={{textAlign:"left",fontSize:30}} className="text-xl font-semibold primary-color">Hot collections</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Hot Bids You Might Be Interested In.</p>
                        </div>
                        
                    </div>
                    <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo"><img src="Assets/images/4-11.png" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a>By <a>Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-1"><img src="Assets/images/4-12.png" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a>By <a>Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-2"><img src="Assets/images/4-13.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a>By <a>Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-3"><img src="Assets/images/4-14.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a>By <a>Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-4"><img src="Assets/images/4-15.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a>By <a>Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media">
                                            <div className="cover-photo cover-photo-5"><img src="Assets/images/4-16.gif" className="profile" /></div>
                                        </div>
                                        <div className="card-body">
                                            <a className="font-semibold text-lg text-center truncate"> Dreamer’s Wake </a>
                                            <div className="flex text-center items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a>By <a>Crypto Excellence - ADMIN</a> </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="explore" id="explore">
                    <div className="my-6 flex items-center justify-between border-b pb-3">
                        <div>
                            <h2 style={{textAlign:"left",fontSize:30}} className="text-xl font-semibold primary-color">Explore</h2>
                            <p className="font-medium text-gray-500 leading-6">Find a Hot Bids You Might Be Interested In.</p>
                        </div>
                        
                    </div>
                    <div className="portfolio-filter">
                        <div className="controls">
                            <label>Filter:</label>
                            <button className="filter" onClick={()=>setCategory("All")} data-filter="all">All</button>
                            <button className="filter" onClick={()=>setCategory("Art")} data-filter=".category-1">Art</button>
                            <button className="filter" onClick={()=>setCategory("Photography")} data-filter=".category-2">Photography</button>
                            <button className="filter" onClick={()=>setCategory("Games")} data-filter=".category-3">Games</button>
                            <button className="filter" onClick={()=>setCategory("Music")} data-filter=".category-4">Music</button>
                            <button className="filter" onClick={()=>setCategory("Domains")} data-filter=".category-5">Domains</button>
                            <button className="filter" onClick={()=>setCategory("Defi")} data-filter=".category-6">Defi</button>
                            <button className="filter" onClick={()=>setCategory("Memes")} data-filter=".category-7">Memes</button>
                            <button className="filter" onClick={()=>setCategory("Metsversas")} data-filter=".category-8">Metsversas</button>
                            <button className="filter" onClick={()=>setCategory("Sports")} data-filter=".category-9">Sports</button>
                            <label>Sort:</label>
                            <button className="sort" data-sort="myorder:asc">Asc</button>
                            <button className="sort" data-sort="myorder:desc">Desc</button>
                        </div>
                        <div className="relative uk-slider" uk-slider="finite: true">
                        <div className="uk-slider-container px-1 py-3">
                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-grid-small uk-grid" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                {saleitems.map((item,i)=>
                                category!=="All"?(
                                item.category===category?
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card" >
                                        <div className="card-media h-16em" onClick={()=>history.push(`/details/sale/${saleitems[i].token.toString()}`)}>
                                            <div className="card-media-overly"></div>
                                            <img src={saleitems[i].filelink} alt="" className="" />
                                            {/* <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div> */}
                                        </div>
                                        <div className="card-body">
                                            <a className="flex font-semibold text-lg truncate capitalize"> {saleitems[i].name} </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a> <span>Price :</span> </a>
                                                <a> <span style={{fontWeight:700}}> {saleitems[i].price+" ETH"} </span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                
                                                <div className="flex leading-4 text-sm">
                                                    <div><strong>Category: {saleitems[i].category}</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a style={{cursor:"pointer"}} onClick={()=>purchase(saleitems[i].token)} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>:
                                null):
                                <li tabIndex="-1" className="uk-active">
                                    <div className="card">
                                        <div className="card-media h-16em" onClick={()=>history.push(`/details/sale/${saleitems[i].token.toString()}`)}>
                                            <div className="card-media-overly"></div>
                                            <img src={saleitems[i].filelink} alt="" className="" />
                                            {/* <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Wishlist</div> */}
                                        </div>
                                        <div className="card-body">
                                            <a className="flex font-semibold text-lg truncate"> {saleitems[i].name } </a>
                                            <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                <a> <span>Price :</span> </a>
                                                <a> <span style={{fontWeight:700}}> {saleitems[i].price+" ETH"}</span> </a>
                                            </div>
                                            <div className="flex mt-2 space-x-2">
                                                
                                                <div className="flex leading-4 text-sm">
                                                    <div><strong>Category: {saleitems[i].category}</strong></div>
                                                </div>
                                            </div>
                                            <div className="flex mt-3 space-x-2 text-sm">
                                                <a onClick={()=>purchase(saleitems[i].token)} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                                                    Purchase Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )}
                                </ul>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white uk-invisible" uk-slider-item="previous">
                                <i className="icon-feather-chevron-left"></i>
                            </a>
                            <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" uk-slider-item="next">
                                <i className="icon-feather-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                

                        </div>
                </div>
            </div>
             </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={()=>setOpen(false)}>
                <Alert onClose={()=>setOpen(false)} severity="error">
                    You own that collectible 
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Home
