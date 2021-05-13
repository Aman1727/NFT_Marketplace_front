import "./Assets/css/bootstrap.min.css"
import "./Assets/css/custom.css"
import "./Assets/css/icons.css"
import "./Assets/css/style.css"
import './App.css';
import React from "react"
import {setAccount,setProfile} from "./redux/actions/actions"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Header"
import EditProfile from './Pages/EditProfileContainer';
import Home from './Pages/Home';
import Create from "./Pages/Create";
import ConnectWallet from "./Pages/ConnectWallet";
import Details from "./Pages/Details";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import UserProfile from "./Pages/UserProfile";
import {getMetamask} from "./utils/metamask"
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"



function App() {
  const dispatch = useDispatch()
  

  React.useEffect(async()=>{
    let scripts = [
      { src: "./Assets/js/bootstrap-select.min.js" },
      { src: "./Assets/js/custom.js" },
      { src: "./Assets/js/jquery-3.3.1.min.js" },
      { src: "./Assets/js/simplebar.js" },
      { src: "./Assets/js/uikit.js" },

  ]
  //Append the script element on each iteration
  scripts.forEach(item => { 
      const script = document.createElement("script")
      script.src = item.src
      script.async = true
      document.body.appendChild(script)
  })
  if(localStorage.getItem("address")){
  let accountdetails=await getMetamask();
  dispatch(setAccount(accountdetails))
  axios.post("http://localhost:4000/users/getprofile", { address: accountdetails.address })
    .then(res => {
      if (res.data.status) {
        dispatch(setProfile({
          name:res.data.user.name,
          image:"http://localhost:4000/" + res.data.user.profile_img,
          bio:res.data.user.bio,
          email:res.data.user.email
        }))
      }
    })
    .catch(e => {
      console.log(e)
    })
  }
    
  },[])

 
  

  return (
    <div className="App">

      {/* <div >Your account :{acc.address}</div>
      <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" onChange={(e)=>{setImage(e.target.files[0])}}></input>
      <button onClick={createNew}>create</button>
      <button onClick={yay}>yay</button>
       */}

      <Router>
      <Header  />
      <Switch>
          <Route path="/edit">
            <EditProfile />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/connect">
            <ConnectWallet/>
          </Route>
          <Route path="/details/:type/:id/:address?" component={Details} />
          <Route exact path="/user/:id" component={UserProfile} />
          <Route path="/profile">
            <Profile  />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
