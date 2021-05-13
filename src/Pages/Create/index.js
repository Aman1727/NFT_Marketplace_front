import React,{useState,useEffect} from 'react'
import {Collectibles,Buckets} from "../../scripts/index";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { CircularProgress } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {  useSelector } from 'react-redux';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Create = () => {
    let history = useHistory();
    const details = useSelector(state=> state.profileReducer);
    const [open,setOpen] = useState(false)
    const [name,setName] = useState("")
    const [file,setFile] = useState(null)
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("Art")
    const [description,setDescription] = useState("")
    const [royalty,setRoyalty] = useState("")
    const [instant,setInstant] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")


    


    React.useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          });
    },[])


    const createCollectible = async () => {
      setError("")
      if(!name||!description||!royalty||!file)
        setError("Please Fill all fields");
      else if(instant===true&&(!price.match(/^\d*\.?\d*$/)||!price))
        setError("Invalid price")
      else{
        try {
            setLoading(true);
            console.log(details)
          let col = new Collectibles(details.account.provider,details.account.signer, process.env.REACT_APP_COLLECTIBLES_ADDRESS);
          let buck = new Buckets();

          let filename=uuid();
          let json=uuid();
          console.log("2");
          await buck.pushBlob(filename,file);
          console.log("2");
          
          let link=await buck.getIpnsLink();
          console.log("json",link)
          let filelink = link+"/"+filename;
          console.log("category",category);
          let k=await buck.pushJSON(json, { name,description,price:instant?price:0,filelink,category });
          console.log("k",k);
          let inputprice=instant?price:"0";
          console.log("inputprice",inputprice);
          let result = await col.create(json,royalty,inputprice);
          console.log("result",result)
          setOpen(true)
          setLoading(false);
          setTimeout(()=>{
            history.push("/profile");
          },1000);
          
          
    
        }
        catch (e) {
          console.log(e)
          setLoading(false);
        }
      }
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return (
            <div id="wrapper">

            <div className="custom-container">
                <div className="section-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                
                            </div>
                            <div className="col-md-6">
                                {/* <!-------------Contant---------------> */}
                                <a onClick={()=>history.goBack()} style={{cursor:"pointer"}}>{"<- Go Back"}</a>
                                <br/>
                                <br/>
                                <h1 style={{fontWeight:"bold",fontSize:30,textAlign:"left"}}>Create NFT</h1>

                                <div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column",}}>
                                    <label style={{fontSize:18}}>Upload file</label>
                                    
                                        <div className="UploadArea text-center">
                                            <span>PNG, GIF, WEBP, MP4 or MP3. Max 30mb</span><br /><br />
                                            <label for="file-upload1"  class="custom-file-upload">
                                            <div className="btn btn-primary">Upload</div>
                                            </label>
                                            <input id="file-upload1" type="file" style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0])}}/>
                                        </div>
                                   
                                </div>

                                {/* <div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                                    <label style={{fontSize:18}}>Put Auction</label>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:400}}>
                                        <div className="text-primary">
                                            You’ll receive bids on this item
                                        </div>
                                        <div className="text-right">
                                            <div className="custom-control custom-switch">
                                              <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={auction} onClick={()=>setAuction(!auction)}/>
                                              <label className="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                                <div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                                    <label style={{fontSize:18}}>Instant sale price</label>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:400}}>
                                        <div className="text-primary" style={{textAlign:"left"}}>
                                            Enter the price for which the item will be instantly sold
                                        </div>
                                        <div className="text-right">
                                            <div className="custom-control custom-switch">
                                              <input type="checkbox" className="custom-control-input" id="customSwitch2" checked={instant} onClick={()=>setInstant(!instant)}/>
                                              <label className="custom-control-label" for="customSwitch2"></label>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="text-primary" style={{textAlign:"left",marginTop:20,textDecoration:"underline"}}>
                                            Please Opt out of Sale if you wish to Auction your Collectible
                                      </div>
                                </div>



                                <div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                                    <label style={{fontSize:18}}>Name</label>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                                </div>

                                <div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                                    <label style={{fontSize:18}}>Category</label>


                                    <select className="form-control" onChange={(e)=>setCategory(e.target.value)}>
                                      <option value="Art">Art</option>
                                      <option value="Photography">Photography</option>
                                      <option value="Games">Game</option>
                                      <option value="Music">Music</option>
                                      <option value="Domains">Domains</option>
                                      <option value="Defi">Defi</option>
                                      <option value="Memes">Memes</option>
                                      <option value="Metsversas">Metsversas</option>
                                      <option value="Sports">Sports</option>
                                    </select>
                                    
                                </div>



                                <div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                                    <label style={{fontSize:18}}>Description </label>
                                    <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="" className="form-control" rows="3"></textarea>
                                </div>

                                {instant&&<div className="form-group" style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
                                    <label style={{fontSize:18}}>Price</label>
                                    <div className="input-group mb-3">
                                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control"/>
                                    <div className="input-group-append" >
                                        <span className="input-group-text">Eth</span>
                                      </div>
                                    </div>
                                </div>}

                                  <label style={{fontSize:18,width:"100%",textAlign:"left"}} className="control-label">Royalties </label>
                                  <div className="form-group" >
                                    <div className="input-group mb-3">
                                      
                                      <input type="text"  className="form-control" value={royalty} onChange={(e)=>setRoyalty(e.target.value)} aria-label="Amount (to the nearest dollar)"/>
                                      <div className="input-group-append" >
                                        <span className="input-group-text">%</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{color:"red"}}>{error}</div>
                                  <div className="form-group">
                                    <div className="btn btn-primary" style={{width:150}} onClick={()=>loading?{}:createCollectible()}>{loading?<CircularProgress color="inherit" size={17}/>:"Create NFT"}</div>
                                </div>
                                </div>


                              
                            <div className="col-md-4 ">
                                <div className="Preview" style={{backgroundImage:`url(${!file?"":URL.createObjectURL(file)})`,backgroundPosition:"center",backgroundRepeat: "no-repeat",backgroundSize:"contain"}}>
                                    <h1 style={{ fontSize: 18 }}>Preview</h1>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Collectible Created!
                </Alert>
            </Snackbar>
            </div>





            

    )
}

export default Create
