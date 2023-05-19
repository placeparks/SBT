import ExDevelopment from './ExDevelopment';
import Features from './Features';
import styles from './Exchange.module.css';
import Security from './Security';
import Solution from './Solution';
import Admin from './Admin';
import OrderBook from './OrderBook';
import Benefits from './Benefits';
import Services from './Services';
import FAQ from './FAQ';


export default function Home(){
    return(
   <>
    <div className={styles.section1}>
    <div class="card mb-3" style={{background:"transparent", color:"white", border:"none"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src='/Exchange/exchange.png' class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h1>Cryptocurrency Exchange Development Company</h1>
      <h5>Enter the roaring crypto market with the best-in-class cryptocurrency exchange development services. Slash down the time for gearing up the revenue streams by creating an incredible white label cryptocurrency exchange software in no time.</h5>
      <p>&#9989; 100,000 transactions per second</p>
   <p>&#9989; Powerful APIs</p>
   <p>&#9989; Crypto spot liquidity</p>
   <p>&#9989; Enterprise-class wallet</p>
      </div>
    </div>
  </div>
</div>

 
 </div>
 <ExDevelopment/>
 <Features/>
 <Security/>
 <Solution/>
 <Admin/>
  <OrderBook/>
  <Benefits/>
  <Services/>
  <FAQ/>
 </>
        )
    }