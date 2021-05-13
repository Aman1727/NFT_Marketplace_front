import React from 'react'
import "../../Assets/css/custom.css"
import Identicon from 'react-identicons';
import { useHistory } from "react-router-dom";
import { Grid,makeStyles,Modal } from '@material-ui/core';
import {Collectibles,Buckets} from "../../scripts/index"
import { Skeleton } from '@material-ui/lab';
import {  useDispatch,useSelector } from 'react-redux';
import {setMyitems,setMyitemsonsale} from "../../redux/actions/actions"
import axios from 'axios';
import { ethers } from 'ethers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Profile = () => {
  const details = useSelector(state=> state.profileReducer);
  const myitems = useSelector(state=> state.itemsReducer.items);
  const mysaleitems = useSelector(state=> state.mysaleReducer.sellitems);
  const dispatch = useDispatch()
  
  let history = useHistory()
  const [tab, setTab] = React.useState(0);
  const [cover,setCover] = React.useState(null)
  const [show,setShow] = React.useState(false)
  const [items,setItems] = React.useState([]);
  const [itemonsale,setItemonsale] = React.useState([]);
  const [open,setOpen] = React.useState(false);
  const [open1,setOpen1] = React.useState(false);
  const [token,setToken] = React.useState(null);
  const [time,setTime] = React.useState("");
  const [price,setPrice] = React.useState("");
  const [snack,setSnack] = React.useState(false);
  const classes = useStyles();

 
  React.useEffect(async () => {
    if(!localStorage.getItem("address"))
        history.push("/connect")
    else{
      console.log("details",details)
    if (details.account) {
      getCoverImg();
      let col = new Collectibles(details.account.provider, details.account.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
      let buck = new Buckets();
      setItems([])
      setItemonsale([])
      try {
        console.log("myitems",myitems)
        let tokenarray = await col.getTokenIdsByOwner(details.account.address);
        console.log("tokenarray",tokenarray)
        let tokenuri = await col.getTokenURIsByIds(tokenarray);
        console.log("tokenuri", tokenuri)
        setItems(tokenuri);

        let tokenarray1 = await col.getTokenIdsForSaleByOwner(details.account.address);
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
        dispatch(setMyitems(temp));

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
        dispatch(setMyitemsonsale(temp1));
        
      } catch (e) {
        console.log("error", e)
      }
    }
  }
  }, [details])

  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log("details",details)
  },[])
  
  const sellItem=async()=>{
    console.log("price",price);
    let col = new Collectibles(details.account.provider, details.account.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
    let res=await col.sell(token,price);
    setPrice("")
    setOpen1(false)
    console.log(res)
  }
  

  const setCoverImg=(cover)=>{
    console.log("cover",cover)
    let form = new FormData();
    form.append("cover",cover);
    form.append("address",details.account.address)
    axios.post(process.env.REACT_APP_BASEURL+"users/setcover", form)
          .then(res => {
            if (res.data.status) {
              setCover(process.env.REACT_APP_BASEURL + res.data.user.cover_img);
            }
          })
          .catch(e => {
            console.log(e)
          })
  }

  const getCoverImg=()=>{
    if(localStorage.getItem("address")){
      axios.post(process.env.REACT_APP_BASEURL+"users/getprofile", { address: details.account.address })
            .then(res => {
              if (res.data.status) {
                setCover(process.env.REACT_APP_BASEURL + res.data.user.cover_img);
              }
            })
            .catch(e => {
              console.log(e)
            })
          }
  }

  const createAuction=async()=>{
    if(localStorage.getItem("address")){
      let l= await details.account.provider.getBlockNumber()
      console.log("l",l)
      let col = new Collectibles(details.account.provider, details.account.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
      let block=((parseInt(time)*3600*24)/15)+l+1;
      let tx = await col.createAuction(ethers.utils.parseEther("0.01"),l+1,block,token);
      
      setTime("")
      setOpen(false)
    }
  }

  return (
    
    <div >
      {localStorage.getItem("address")&&
      <div className="custom-container">

        <div className="section-one">
          <div className="row">
            <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="col-md-12" style={{ backgroundImage: `url(${!cover?"Assets/images/bg.jpg":cover})`, minHeight: 300,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover" }}>
              {show&&
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}} >
                <label for="file-upload2" class="custom-file-upload">
                <a style={{ width: 100,marginTop:20,cursor:"pointer" }} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                  Set Cover
                  </a>
                </label>
                <input id="file-upload2" type="file" style={{display:"none"}} onChange={(e)=>{e.target.files[0]?setCoverImg(e.target.files[0]):console.log("other")}}/>
              </div>}
            </div>
            <div className="col-md-12" >
              <center>
                <div className="ProfileImage" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "white",overflow:"hidden" }}>
                  {!details.profile?<Identicon string={details.account&&details.account.address} size={100}/>:<img style={{width:200,height:200}} src={details.profile&&details.profile.image}/>}
                </div>
              </center>

            </div>
            <div className="col-md-12" >
              <center>
                <h3 style={{ fontSize: 20, fontWeight: "bold",marginTop:10 ,textTransform:"capitalize"}}>
                  {details.profile?details.profile.name:""}
                </h3>
                <h3 style={{ fontSize: 18, fontWeight: "bold",marginTop:10 }}>
                  {!details.account ? "" : details.account.address.substring(0, 20) + "..." + details.account.address.substring(details.account.address.length - 5, details.account.address.length - 1)}
                </h3>
                

              </center>
            </div>
            <div className="col-md-12"  style={{marginTop:20}}>
              <center>
                <button className="btn btn-outline-secondary" onClick={() => history.push("/edit")}>Edit Profile</button>
                {/* <button className="btn btn-outline-secondary">*</button>
                                <button className="btn btn-outline-secondary">{"->"}</button> */}
              </center>
            </div>
            <div className="col-md-12" >
              <br />
              <br />
              <br />
            </div>

            <div className="col-md-6">


              <ul className="nav nav-tabs">
                <li className="nav-item" style={{cursor:"pointer"}}>
                  <a className={tab === 0 ? "nav-link active" : "nav-link"} onClick={() => setTab(0)}>Onsale</a>
                </li>
                <li className="nav-item" style={{cursor:"pointer"}}>
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
                    {myitems[i]?
                    <>
                    <div className="card-media h-16em" onClick={()=>history.push(`/details/myitem/${myitems[i].token.toString()}`)}>
                      <div className="card-media-overly"></div>
                      <img src={myitems[i].filelink} alt="" className="" />
                    </div>
                    <div className="card-body">
                      <a className="flex font-semibold text-lg truncate"> {myitems[i].name} </a>
                      <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                
                                                <a> <span style={{fontWeight:700}}>{parseInt(myitems[i].price)?("Price: "+myitems[i].price+" ETH"):""}</span> </a>
                                            </div>
                      <div className="flex mt-2 space-x-2">
                        <div className="flex leading-4 text-sm">
                          <div><strong> {myitems[i].category}</strong></div>
                        </div>
                      </div>
                      <div className="flex mt-3 space-x-2 text-sm">
                      <a onClick={myitems[i].price==0?()=>{setToken(myitems[i].token);setOpen1(true);}:()=>setSnack(true)} style={{cursor:"pointer"}} className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
                        Sell Now
                      </a>
                      <a onClick={myitems[i].price==0?()=>{setToken(myitems[i].token);setOpen(true);}:()=>setSnack(true)} style={{cursor:"pointer"}} className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">
                          Auction
                      </a>
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
                    {mysaleitems[i]?
                    <>
                    <div className="card-media h-16em" onClick={()=>history.push(`/details/myitem/${mysaleitems[i].token.toString()}`)}>
                      <div className="card-media-overly"></div>
                      <img src={mysaleitems[i].filelink} alt="" className="" />
                    </div>
                    <div className="card-body">
                      <a className="flex font-semibold text-lg truncate"> {mysaleitems[i].name} </a>

                      <div className="flex items-center flex-wrap space-x-1 text-sm text-gray-500 capitalize">
                                                
                                                <a> <span style={{fontWeight:700}}>{parseInt(mysaleitems[i].price)?("Price: "+mysaleitems[i].price+" ETH"):""}</span> </a>
                                            </div>
                      <div className="flex mt-2 space-x-2">
                        <div className="flex leading-4 text-sm">
                          <div><strong> {mysaleitems[i].category}</strong></div>
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

        </div>}
        <Snackbar open={snack} autoHideDuration={3000} onClose={()=>setSnack(false)}>
                <Alert onClose={()=>setSnack(false)} severity="error">
                    Already Processed 
                </Alert>
            </Snackbar>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className="form-group" style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
            <label style={{ fontSize: 18 }}>Please Enter number of days for auction</label>
            <input type="text" placeholder="Days" value={time} onChange={(e) => setTime(e.target.value)} className="form-control" />
            <div className="btn btn-primary"  style={{marginTop:10}} onClick={()=>createAuction()}>Submit</div>
          </div>
        </div>
      </Modal>
      <Modal
        open={open1}
        onClose={() => setOpen1(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className="form-group" style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
            <label style={{ fontSize: 18 }}>Please Enter a Price</label>
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
            <div className="btn btn-primary"  style={{marginTop:10}} onClick={()=>sellItem()}>Submit</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,

  },
}));

export default Profile
