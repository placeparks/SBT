import styles from './Footer.module.css';
import {
    AiOutlineTwitter,
    AiOutlineInstagram,
  } from "react-icons/ai";
export default function Footer() {
    return(
        <div className={styles.footerBody}>
<div className={styles.servicesSec}>
    <h6>SERVICES</h6>
    <p>&#11166; NFT Development</p>
    <p>&#11166; Metaverse Development</p>
    <p>&#11166; NFT Marketplace Development</p>
    <p>&#11166; NFT Gaming Plateform Development</p>
    <p>&#11166; DeFi Decentralized Finance Development</p>
    <p>&#11166; White Lable Exchange</p>
    <p>&#11166; Decentralized Exchange Development</p>
    <p>&#11166; Wallet</p>
    <p>&#11166; Coin Development</p>
</div>

<div className={styles.contactSec}>
<h6>CONTACT</h6>
    <p>&#x1F4E7; support@blockwisetech.com</p>
    <p style={{width:"300px"}}><img src="./location.png" alt=""/> 77/39 12D FI. Sinsathorn Tower, Krungthonburi Road, Khlongtonsai, Khlongsarn,Bangkok 10600</p>    <p>&#x2706; 02-4381668</p>
</div>

<div className={styles.aboutUs}>
    <h6>ABOUT US</h6>
    <p>&#11166; Media</p>
    <p>&#11166; We are Hiring </p>
    <p>&#11166; Patner With Us</p>
    <p>&#11166; Life at Smart Block Tech</p>
</div>

<div className={styles.socialSec}>
    <img src='logo.png' alt=""/>
        <p>SMART BLOCKTECH CO.LTD.</p>
    <p>©2023 All right reserved</p>
              <AiOutlineInstagram/>
              <AiOutlineTwitter/>
</div>


        </div>
    )
}
