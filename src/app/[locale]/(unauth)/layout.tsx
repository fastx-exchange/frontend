
import LocaleSwitcher from '../../../components/LocaleSwitcher';
import styles from '../../../styles/layout.module.scss';
import "../../../styles/global.css"

import { DownloadOutlined, GlobalOutlined, MoonOutlined, DollarOutlined, SearchOutlined, DiscordOutlined, TikTokOutlined, FacebookOutlined, RedditOutlined } from "@ant-design/icons";

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <a className="logo-link" href="https://www.binance.com/vi">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" style={{ width: "120px" }} className="header-logo w-[120px]" fill="#F0B90B">
              <path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935"></path>
            </svg>
          </a>
          <div>Buy Crypto
            <ul>
              <p>basic</p>
              <li>
                <a href="#">Spot</a>
                <span></span>
              </li>
              <li>
                <a href="#">Margin</a>
              </li>
              <li>
                <a href="#">P2P</a>
              </li>
              <li>
                <a href="#">Lot Conversiton & Trading</a>
              </li>
            </ul>
            <ul>
              <p>Advanced</p>
              <li>
                <a href="#">Trading Bot</a>
              </li>
              <li>
                <a href="#">Copy Transactions</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <a href="#" >Market</a>
          <a href="#" >Transaction</a>
          <a href="#" >Futures</a>
          <a href="#" >Earn</a>
          <a href="#" >Square</a>
          <a href="#" >More</a>
        </div>
        <div className={styles.headerRight}>
          <div id="search" style={{ width: "20px", height: "15px" }}><SearchOutlined /></div>
          <button type="submit" className={styles.headerButtonLogin}>Log in</button>
          <button type="submit" className={styles.headerButtonSignin}>Register</button>
          <div><DownloadOutlined /></div>
          <div><GlobalOutlined /></div>
          <div><MoonOutlined /></div>
        </div>
      </header>
      <div className="#">{props.children}</div>
      <LocaleSwitcher />
      <footer className={styles.footer}>
        <div className={styles.footerColumn} >
          <div>
            <b>Community</b>
            <div className={styles.footerIcon}>
              <a href="#"><DiscordOutlined /></a>
              <a href="#"><TikTokOutlined /></a>
              <a href="#"><FacebookOutlined /></a>
              <a href="#"><RedditOutlined /></a>
              <a href="#"><DiscordOutlined /></a>
              <a href="#"><TikTokOutlined /></a>
              <a href="#"><FacebookOutlined /></a>
              <a href="#"><RedditOutlined /></a>
              <a href="#"><TikTokOutlined /></a>
              <a href="#"><FacebookOutlined /></a>
            </div>
            <div className={styles.footerColumnBottom}>
              <div><GlobalOutlined /> Vietnamese</div>
              <div><DollarOutlined /> USD-$</div>
            </div>
          </div>
          <div className={styles.footerItemColumn}>
            <b>About us</b>
            <a href="#" >More information</a>
            <a href="#" >Career opportunities</a>
            <a href="#" >Notification</a>
            <a href="#" >News</a>
            <a href="#" >Newspapers</a>
            <a href="#" >Rules</a>
            <a href="#" >Private</a>
            <a href="#" >Blog</a>
            <a href="#" >Download</a>
            <a href="#" >Risk warning</a>
            <a href="#" >Community</a>
          </div>
          <div className={styles.footerItemColumn}>
            <b>Product</b>
            <a href="#">Exchange</a>
            <a href="#">Academy</a>
            <a href="#">Pay</a>
            <a href="#">Leveraged Tokens</a>
            <a href="#">Buy cryptocurrency</a>
            <a href="#">NFTs</a>
            <a href="#">Live</a>
            <a href="#">Tax</a>
            <a href="#">Gift card</a>
            <a href="#">Launchpool</a>
            <a href="#">Automated Investing</a>
            <a href="#">Staking ETH</a>
            <a href="#">BNB</a>
            <a href="#">BABT</a>
            <a href="#">Research</a>
            <a href="#">Charity</a>
          </div>
          <div className={styles.footerItemColumn}>
            <div className={styles.footerItemColumnTitle}>
              <b>Business</b>
              <a href="#">Sign up for P2P Merchants</a>
              <a href="#">Application for P2Pro merchants</a>
              <a href="#">Register to list coins</a>
              <a href="#">Services for organizations and VIPs</a>
              <a href="#">Lab</a>
            </div>
            <div className={styles.footerItemColumnTitle}>
              <b>Learn</b>
              <a href="#">Learn knowledge and earn money</a>
              <a href="#">See cryptocurrency prices</a>
              <a href="#">Bitcoin price</a>
              <a href="#">Ethereum Price</a>
              <a href="#">Browse cryptocurrency price predictions</a>
              <a href="#">Bitcoin price prediction</a>
              <a href="#">Ethereum price prediction</a>
              <a href="#">Buy Bitcoins</a>
              <a href="#">Buy BNB</a>
              <a href="#">Buy Ripple</a>
              <a href="#">Buy Dogecoin</a>
              <a href="#">Buy Ethereum</a>
              <a href="#">Buy tradable altcoins</a>
            </div>
          </div>
          <div className={styles.footerItemColumn}>
            <div className={styles.footerItemColumnTitle}>
              <b>Service</b>
              <a href="#">Affiliate</a>
              <a href="#">Introduce</a>
              <a href="#">OTC trading</a>
              <a href="#">Historical Market Data</a>
              <a href="#">Proof of Reserve</a>
            </div>
            <div className={styles.footerItemColumnTitle}>
              <b>Support</b>
              <a href="#">Chat support 24/7</a>
              <a href="#">Help Center</a>
              <a href="#">Product feedback and suggestions</a>
              <a href="#">API</a>
              <a href="#" >Verify Binance</a>
              <a href="#" >Binance Airdrop Portal</a>
              <a href="#" >Trading rules</a>
              <a href="#" >Law Enforcement</a>
              <a href="#" >Requirements</a>
            </div>
          </div>
        </div>
        <p>@hihi</p>
      </footer>
    </>
  );
}
