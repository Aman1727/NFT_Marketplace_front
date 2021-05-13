import React from 'react'
import logo from "../../Assets/images/logo.jpg"

const Footer = () => {
    const scrollToDiv=(position)=>{
        const titleElement=document.getElementById(position)
        var rect = titleElement.offsetTop;
        console.log("rect",rect);
        window.scrollTo({ behavior: 'smooth',top:rect-100 })
    }
    return (
        <div>
            <footer className="footer-area pt-100">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <a className="logo">
                                       <img src={logo} style={{width: "23%"}} alt="Logo" />
                                        
                                    </a>
                                    <p>A non-fungible token is a unit of data on a digital ledger called a blockchain, where each NFT can represent a unique digital item, and thus they are not interchangeable. NFTs can represent digital files such as art, audio, videos, items in video games and other forms of creative work.</p>
                                    <ul>
                                        <li>
                                            <a target="_blank">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-services">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("explore")}>Explore</a>
                                        </li>
                                        <li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("top_sellers")}>Top Sellers</a>
                                        </li>
                                        <li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("live_auction")}>Live Action</a>
                                        </li>
                                        <li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("hot_bids")}>Hot Bids</a>
                                        </li>
										<li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("sports_bids")}>Sports NFT</a>
                                        </li>
										<li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("hot-collection")}>Hot Collections</a>
                                        </li>
										<li>
                                            <a style={{cursor:"pointer"}} onClick={()=>scrollToDiv("explore")}>1clicknft</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-services">
                                    <h3>Community</h3>
                                    <ul>
                                        <li>
                                            <a>NFT Token</a>
                                        </li>
                                        <li>
                                            <a>Discussion</a>
                                        </li>
                                        <li>
                                            <a>Voting</a>
                                        </li>
                                        <li>
                                            <a>Suggest feature</a>
                                        </li>
										
										 <li>
                                            <a>Guide</a>
                                        </li>
										
										 <li>
                                            <a>Developers</a>
                                        </li>
										<li>
                                            <a>Mission</a>
                                        </li>
										<li>
                                            <a>Vision</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-touch">
                                    <h3>Get In Touch</h3>
                                    <ul>
                                        <li>
                                            <i className="fa fa-phone"></i>
                                            <a href="https://t.me/oneclicknftoff">Telegram Channel</a>
                                            <a href="https://t.me/joinchat/c2bBpQUZvYFjN2Vk">Telegram Group</a>
                                            <a href="http://linkedin.com/in/loic-la-cam-804061172">Managing Director LinkedIn </a>
                                            <a href="mailto:Exchange@1clicknft.com">Listing our project / token</a>
                                        
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            <a href="mailto:1clicknft@gmail.com">Email: 1clicknft@gmail.com</a>
                                            <a href="mailto:info@1clicknft.com">Email: info@1clicknft.com</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker"></i>
                                            <a href="https://www.google.com/maps">Office Adress: 20-22 Wenlock Road, London, N1 7GU, United Kingdom</a>
                                          </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <p>Copyright ©2021 . Powered By <a href="https://www.1clicknft.com" target="_blank">1clicknft.com</a></p>
                    </div>
                </div>
            </footer>
        
        </div>
    )
}

export default Footer
