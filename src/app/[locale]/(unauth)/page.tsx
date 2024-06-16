'use client';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import styles from '../../../styles/Home.module.scss';
import { useState } from 'react';
import Image from 'next/image';

// export async function generateMetadata(props: { params: { locale: string } }) {
//   const t = await getTranslations({
//     locale: props.params.locale,
//     namespace: 'Index',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default function Index() {
  const t = useTranslations("Index");

  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.introduce}>
          <div className={styles.introduce_left}>
            <CryptoIntro />
            <IntroConnect />
          </div>
          <div className={styles.introduce_right}>
            <CryptoList />
            <NewsList />
          </div>
        </div>
        <Download />
        <FAQs />
      </div >
    </div >

  );
}
const CryptoIntro: React.FC = () => (
  <div className={styles.cryptoIntro}>
    <h1>Nắm bắt cơ hội</h1>
    <h2>Giao dịch Crypto hôm nay!</h2>
    <div className={styles.inputGroup}>
      <input type="text" placeholder="Email/Số điện thoại" />
      <button>Hãy bắt đầu</button>
    </div>
  </div>
);

const CryptoList: React.FC = () => (
  <div className={styles.cryptoList}>
    <div className={styles.cryptoItem}>
      <span>BTC Bitcoin</span>
      <span>$66,299.99</span>
      <span className={styles.green}>+0.13%</span>
    </div>
    <div className={styles.cryptoItem}>
      <span>ETH Ethereum</span>
      <span>$3,554.80</span>
      <span className={styles.green}>+0.52%</span>
    </div>
    <div className={styles.cryptoItem}>
      <span>BNB BNB</span>
      <span>$606.10</span>
      <span className={styles.red}>-0.33%</span>
    </div>
    <div className={styles.cryptoItem}>
      <span>XRP Ripple</span>
      <span>$0.4896</span>
      <span className={styles.green}>+2.11%</span>
    </div>
  </div>
);

const NewsList: React.FC = () => (
  <div className={styles.newsList}>
    <div className={styles.newsItem}>
      Người đồng sáng lập Jupiter thảo luận về tiềm năng và thách thức của tiền tệ do người dùng tạo ra
    </div>
    <div className={styles.newsItem}>
      Người đồng sáng lập Farcaster Dan Romero làm rõ sự tập trung của Warpcast vào người dùng nói tiếng Anh
    </div>
    <div className={styles.newsItem}>
      Dự án trò chơi Catizen vượt qua 20 triệu người dùng, hơn 500.000 khách hàng trả tiền
    </div>
    <div className={styles.newsItem}>
      Trải nghiệm BAKE tăng vọt trong thời gian ngắn, sau đó là sự suy giảm nhanh chóng
    </div>
  </div>
);

const IntroConnect: React.FC = () => (
  <div className={styles.introconnect}>
    <div className={styles.connect}>
      Hoặc kết nối với
      <div className={styles.icons}>
        <img src="/google-icon.png" alt="Google" />
        <img src="/apple-icon.png" alt="Apple" />
      </div>
    </div>
    <div className={styles.download}>
      Tải xuống ứng dụng
      <div className={styles.qrCode}>
        <img src="/qr-code.png" alt="QR Code" />
      </div>
    </div>
  </div>
);

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: 'Sàn giao dịch tiền mã hóa là gì?',
      answer: 'Sàn giao dịch tiền mã hóa là thị trường kỹ thuật số cho phép người dùng mua và bán các loại tiền mã hóa như Bitcoin, Ethereum và Tether. Sàn giao dịch Binance là sàn giao dịch tiền mã hóa lớn nhất tính theo khối lượng giao dịch.',
    },
    {
      question: 'Binance cung cấp những sản phẩm gì?',
      answer: 'Binance cung cấp nhiều sản phẩm như giao dịch tiền mã hóa, giao dịch ký quỹ, giao dịch tương lai, v.v.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={styles.faqs}>
      <h1 className={styles.title}>Các câu hỏi thường gặp</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles['faq-item']} ${activeIndex === index ? styles.active : ''}`}
        >
          <div className={styles['faq-question']} onClick={() => handleToggle(index)}>
            <span>{faq.question}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={styles['faq-answer']}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};


const Download: React.FC = () => {

  const [activeTab, setActiveTab] = useState('Lite');

  return (
    <div className={styles.download}>
      <div className={styles.phoneSection}>
        <div className={styles.phoneWrapper}>
          <Image width="400" height="100" src="https://bin.bnbstatic.com/image/julia/new-homepage/download-lite-dark.svg" alt="Phone" className={styles.phoneImage} />
        </div>
        <div className={styles.tabs}>
          <span
            className={`${styles.tab} ${activeTab === 'Máy tính' ? styles.active : ''}`}
            onClick={() => setActiveTab('Máy tính')}
          >
            Máy tính
          </span>
          <span
            className={`${styles.tab} ${activeTab === 'Lite' ? styles.active : ''}`}
            onClick={() => setActiveTab('Lite')}
          >
            Lite
          </span>
          <span
            className={`${styles.tab} ${activeTab === 'Pro' ? styles.active : ''}`}
            onClick={() => setActiveTab('Pro')}
          >
            Pro
          </span>
        </div>
        <div className={styles.tabContent}>
          {activeTab === 'Máy tính' && <div>Máy tính content</div>}
          {activeTab === 'Lite' && <div>Lite content</div>}
          {activeTab === 'Pro' && <div>Pro content</div>}
        </div>
      </div>
      <div className={styles.qrCode}>
        <div className={styles.qrCodeLabel}>Giao dịch cả khi đang di chuyển. Mọi lúc, mọi nơi.</div>
        {/* <Image src={qrCodeImage} alt="QR Code" className={styles.qrCodeImage} /> */}
        <svg shape-rendering="crispEdges" height="152" width="152" viewBox="0 0 45 45"><path fill="#FFFFFF" d="M0,0 h45v45H0z"></path><path fill="#000000" d="M0 0h7v1H0zM8 0h2v1H8zM13 0h2v1H13zM20 0h2v1H20zM25 0h2v1H25zM28 0h3v1H28zM33 0h1v1H33zM36 0h1v1H36zM38,0 h7v1H38zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM11 1h5v1H11zM17 1h2v1H17zM20 1h6v1H20zM27 1h2v1H27zM31 1h3v1H31zM35 1h1v1H35zM38 1h1v1H38zM44,1 h1v1H44zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h3v1H10zM19 2h2v1H19zM22 2h2v1H22zM25 2h3v1H25zM30 2h1v1H30zM32 2h2v1H32zM35 2h1v1H35zM38 2h1v1H38zM40 2h3v1H40zM44,2 h1v1H44zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM12 3h1v1H12zM14 3h1v1H14zM20 3h1v1H20zM22 3h1v1H22zM25 3h2v1H25zM28 3h1v1H28zM30 3h2v1H30zM35 3h2v1H35zM38 3h1v1H38zM40 3h3v1H40zM44,3 h1v1H44zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h4v1H8zM14 4h4v1H14zM20 4h5v1H20zM26 4h6v1H26zM33 4h4v1H33zM38 4h1v1H38zM40 4h3v1H40zM44,4 h1v1H44zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM11 5h1v1H11zM13 5h1v1H13zM17 5h1v1H17zM19 5h2v1H19zM24 5h2v1H24zM29 5h1v1H29zM32 5h1v1H32zM38 5h1v1H38zM44,5 h1v1H44zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38,6 h7v1H38zM8 7h2v1H8zM12 7h1v1H12zM16 7h3v1H16zM20 7h1v1H20zM24 7h4v1H24zM32 7h3v1H32zM36 7h1v1H36zM0 8h1v1H0zM4 8h1v1H4zM6 8h4v1H6zM11 8h2v1H11zM14 8h1v1H14zM17 8h1v1H17zM19 8h6v1H19zM29 8h2v1H29zM32 8h1v1H32zM34 8h1v1H34zM37 8h5v1H37zM44,8 h1v1H44zM0 9h1v1H0zM2 9h4v1H2zM9 9h1v1H9zM11 9h4v1H11zM16 9h1v1H16zM18 9h1v1H18zM21 9h3v1H21zM26 9h2v1H26zM29 9h2v1H29zM33 9h1v1H33zM35 9h7v1H35zM1 10h1v1H1zM4 10h4v1H4zM10 10h1v1H10zM12 10h1v1H12zM14 10h2v1H14zM18 10h1v1H18zM22 10h1v1H22zM25 10h2v1H25zM29 10h2v1H29zM33 10h1v1H33zM35 10h1v1H35zM37 10h4v1H37zM43 10h1v1H43zM0 11h6v1H0zM8 11h2v1H8zM15 11h2v1H15zM18 11h1v1H18zM22 11h1v1H22zM25 11h1v1H25zM28 11h2v1H28zM31 11h1v1H31zM34 11h1v1H34zM36 11h1v1H36zM38 11h1v1H38zM1 12h1v1H1zM3 12h2v1H3zM6 12h1v1H6zM8 12h1v1H8zM10 12h1v1H10zM15 12h4v1H15zM20 12h1v1H20zM22 12h3v1H22zM26 12h2v1H26zM29 12h1v1H29zM32 12h1v1H32zM35 12h1v1H35zM38 12h2v1H38zM41 12h1v1H41zM43 12h1v1H43zM0 13h2v1H0zM3 13h3v1H3zM7 13h2v1H7zM11 13h1v1H11zM15 13h1v1H15zM20 13h1v1H20zM23 13h1v1H23zM25 13h4v1H25zM30 13h1v1H30zM32 13h1v1H32zM35 13h2v1H35zM38 13h6v1H38zM1 14h1v1H1zM6 14h5v1H6zM14 14h1v1H14zM16 14h1v1H16zM20 14h4v1H20zM25 14h2v1H25zM28 14h1v1H28zM30 14h3v1H30zM36 14h3v1H36zM42 14h2v1H42zM0 15h2v1H0zM4 15h2v1H4zM8 15h3v1H8zM15 15h1v1H15zM19 15h1v1H19zM22 15h2v1H22zM25 15h1v1H25zM27 15h1v1H27zM32 15h1v1H32zM35 15h1v1H35zM37 15h3v1H37zM43,15 h2v1H43zM0 16h2v1H0zM3 16h1v1H3zM6 16h2v1H6zM9 16h2v1H9zM12 16h1v1H12zM14 16h1v1H14zM16 16h3v1H16zM20 16h1v1H20zM22 16h4v1H22zM27 16h1v1H27zM29 16h2v1H29zM32 16h3v1H32zM39 16h1v1H39zM44,16 h1v1H44zM3 17h2v1H3zM7 17h2v1H7zM10 17h1v1H10zM15 17h1v1H15zM17 17h1v1H17zM21 17h3v1H21zM26 17h3v1H26zM30 17h2v1H30zM33 17h1v1H33zM35 17h2v1H35zM38 17h1v1H38zM41 17h3v1H41zM1 18h2v1H1zM6 18h4v1H6zM12 18h2v1H12zM15 18h1v1H15zM17 18h1v1H17zM20 18h1v1H20zM25 18h2v1H25zM29 18h5v1H29zM36 18h3v1H36zM40 18h1v1H40zM43 18h1v1H43zM0 19h4v1H0zM8 19h5v1H8zM16 19h2v1H16zM19 19h1v1H19zM22 19h1v1H22zM26 19h2v1H26zM29 19h1v1H29zM32 19h3v1H32zM36 19h2v1H36zM39 19h1v1H39zM43 19h1v1H43zM0 20h1v1H0zM2 20h1v1H2zM4 20h5v1H4zM10 20h2v1H10zM16 20h3v1H16zM20 20h8v1H20zM29 20h1v1H29zM31 20h3v1H31zM36,20 h9v1H36zM0 21h1v1H0zM3 21h2v1H3zM8 21h1v1H8zM10 21h1v1H10zM13 21h1v1H13zM15 21h1v1H15zM20 21h1v1H20zM24 21h1v1H24zM26 21h1v1H26zM28 21h3v1H28zM32 21h2v1H32zM35 21h2v1H35zM40 21h4v1H40zM0 22h2v1H0zM4 22h1v1H4zM6 22h1v1H6zM8 22h2v1H8zM13 22h1v1H13zM16 22h2v1H16zM19 22h2v1H19zM22 22h1v1H22zM24 22h1v1H24zM26 22h5v1H26zM33 22h1v1H33zM36 22h1v1H36zM38 22h1v1H38zM40 22h2v1H40zM1 23h2v1H1zM4 23h1v1H4zM8 23h2v1H8zM14 23h1v1H14zM19 23h2v1H19zM24 23h2v1H24zM27 23h1v1H27zM29 23h1v1H29zM31 23h3v1H31zM35 23h2v1H35zM40 23h1v1H40zM4 24h5v1H4zM10 24h2v1H10zM13 24h1v1H13zM15 24h1v1H15zM18 24h8v1H18zM27 24h1v1H27zM29 24h1v1H29zM32 24h2v1H32zM36 24h6v1H36zM44,24 h1v1H44zM1 25h1v1H1zM5 25h1v1H5zM13 25h6v1H13zM21 25h4v1H21zM26 25h5v1H26zM33 25h1v1H33zM39 25h1v1H39zM42 25h2v1H42zM1 26h2v1H1zM5 26h5v1H5zM11 26h2v1H11zM16 26h1v1H16zM23 26h2v1H23zM26 26h1v1H26zM30 26h4v1H30zM37 26h1v1H37zM39 26h5v1H39zM0 27h3v1H0zM4 27h1v1H4zM7 27h3v1H7zM11 27h1v1H11zM14 27h1v1H14zM17 27h4v1H17zM25 27h2v1H25zM30 27h1v1H30zM32 27h1v1H32zM36 27h1v1H36zM38 27h1v1H38zM40 27h1v1H40zM1 28h2v1H1zM4 28h4v1H4zM10 28h4v1H10zM15 28h1v1H15zM17 28h1v1H17zM20 28h2v1H20zM23 28h1v1H23zM26 28h2v1H26zM29 28h2v1H29zM32 28h3v1H32zM36 28h2v1H36zM39 28h2v1H39zM43 28h1v1H43zM0 29h2v1H0zM5 29h1v1H5zM9 29h1v1H9zM11 29h4v1H11zM16 29h1v1H16zM18 29h1v1H18zM22 29h2v1H22zM26 29h2v1H26zM29 29h5v1H29zM35 29h1v1H35zM37 29h1v1H37zM39 29h1v1H39zM41 29h3v1H41zM0 30h1v1H0zM6 30h2v1H6zM9 30h2v1H9zM15 30h4v1H15zM20 30h2v1H20zM23 30h2v1H23zM26 30h1v1H26zM28 30h4v1H28zM39 30h2v1H39zM43 30h1v1H43zM0 31h5v1H0zM8 31h2v1H8zM11 31h1v1H11zM14 31h1v1H14zM16 31h2v1H16zM19 31h4v1H19zM27 31h1v1H27zM30 31h1v1H30zM32 31h3v1H32zM36 31h1v1H36zM38 31h3v1H38zM43 31h1v1H43zM2 32h1v1H2zM4 32h3v1H4zM9 32h2v1H9zM14 32h1v1H14zM16 32h1v1H16zM18 32h4v1H18zM23 32h5v1H23zM32 32h2v1H32zM37 32h2v1H37zM40,32 h5v1H40zM0 33h2v1H0zM3 33h2v1H3zM8 33h1v1H8zM10 33h1v1H10zM12 33h2v1H12zM16 33h1v1H16zM22 33h2v1H22zM26 33h2v1H26zM29 33h2v1H29zM32 33h2v1H32zM37 33h1v1H37zM39 33h1v1H39zM41 33h1v1H41zM43 33h1v1H43zM4 34h1v1H4zM6 34h1v1H6zM13 34h1v1H13zM17 34h1v1H17zM20 34h5v1H20zM26 34h2v1H26zM29 34h2v1H29zM33 34h1v1H33zM35 34h1v1H35zM37 34h1v1H37zM39 34h2v1H39zM42 34h2v1H42zM1 35h4v1H1zM7 35h1v1H7zM9 35h1v1H9zM11 35h1v1H11zM13 35h1v1H13zM16 35h1v1H16zM18 35h3v1H18zM22 35h1v1H22zM25 35h2v1H25zM30 35h1v1H30zM32 35h1v1H32zM34 35h1v1H34zM38 35h1v1H38zM40 35h1v1H40zM0 36h1v1H0zM3 36h2v1H3zM6 36h2v1H6zM10 36h1v1H10zM12 36h1v1H12zM14 36h3v1H14zM20 36h5v1H20zM27 36h1v1H27zM29 36h1v1H29zM32 36h1v1H32zM36 36h5v1H36zM43,36 h2v1H43zM8 37h2v1H8zM12 37h5v1H12zM19 37h2v1H19zM24 37h1v1H24zM26 37h2v1H26zM29 37h2v1H29zM33 37h1v1H33zM35 37h2v1H35zM40 37h4v1H40zM0 38h7v1H0zM8 38h2v1H8zM14 38h2v1H14zM18 38h3v1H18zM22 38h1v1H22zM24 38h1v1H24zM26 38h1v1H26zM28 38h1v1H28zM30 38h3v1H30zM34 38h1v1H34zM36 38h1v1H36zM38 38h1v1H38zM40 38h2v1H40zM43 38h1v1H43zM0 39h1v1H0zM6 39h1v1H6zM10 39h1v1H10zM14 39h2v1H14zM17 39h1v1H17zM19 39h2v1H19zM24 39h1v1H24zM26 39h2v1H26zM31 39h1v1H31zM36 39h1v1H36zM40 39h1v1H40zM43 39h1v1H43zM0 40h1v1H0zM2 40h3v1H2zM6 40h1v1H6zM8 40h1v1H8zM11 40h1v1H11zM15 40h2v1H15zM18 40h7v1H18zM26 40h2v1H26zM30 40h1v1H30zM32 40h1v1H32zM34 40h8v1H34zM43,40 h2v1H43zM0 41h1v1H0zM2 41h3v1H2zM6 41h1v1H6zM11 41h1v1H11zM13 41h2v1H13zM19 41h3v1H19zM23 41h11v1H23zM38 41h1v1H38zM40 41h3v1H40zM0 42h1v1H0zM2 42h3v1H2zM6 42h1v1H6zM10 42h2v1H10zM13 42h1v1H13zM16 42h1v1H16zM20 42h2v1H20zM23 42h2v1H23zM26 42h6v1H26zM33 42h1v1H33zM37 42h2v1H37zM40 42h1v1H40zM43 42h1v1H43zM0 43h1v1H0zM6 43h1v1H6zM9 43h4v1H9zM15 43h4v1H15zM20 43h1v1H20zM22 43h6v1H22zM30 43h3v1H30zM34 43h4v1H34zM0 44h7v1H0zM8 44h1v1H8zM13 44h1v1H13zM17 44h1v1H17zM20 44h6v1H20zM27 44h1v1H27zM32 44h2v1H32zM35 44h1v1H35zM37 44h1v1H37zM39 44h2v1H39zM44,44 h1v1H44z"></path></svg>
        <div className={styles.downloadOptions}>
          <span>Quét để tải về ứng dụng</span>
          <span>iOS và Android</span>
        </div>
        <div className={styles.platforms}>
          <div className={styles.platformIcon}>MacOS</div>
          <div className={styles.platformIcon}>Windows</div>
          <div className={styles.platformIcon}>Linux</div>
        </div>
      </div>
    </div>
  );
};

