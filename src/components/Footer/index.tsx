// components/Footer.js
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Cộng đồng</h3>
                    <ul>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Reddit</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Về chúng tôi</h3>
                    <ul>
                        <li><a href="#">Thông tin thêm</a></li>
                        <li><a href="#">Cơ hội nghề nghiệp</a></li>
                        <li><a href="#">Thông báo</a></li>
                        <li><a href="#">Tin tức</a></li>
                        <li><a href="#">Báo chí</a></li>
                        <li><a href="#">Pháp lý</a></li>
                        <li><a href="#">Điều khoản</a></li>
                        <li><a href="#">Riêng tư</a></li>
                        <li><a href="#">Gây dựng niềm tin</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Cộng đồng</a></li>
                        <li><a href="#">Sơ đồ trang web</a></li>
                        <li><a href="#">Cảnh báo rủi ro</a></li>
                        <li><a href="#">Thông báo</a></li>
                        <li><a href="#">Tải xuống</a></li>
                        <li><a href="#">Ứng dụng dành cho máy tính để bàn</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Sản phẩm</h3>
                    <ul>
                        <li><a href="#">Exchange</a></li>
                        <li><a href="#">Mua tiền mã hóa</a></li>
                        <li><a href="#">Token đòn bẩy</a></li>
                        <li><a href="#">Pay</a></li>
                        <li><a href="#">Academy</a></li>
                        <li><a href="#">Live</a></li>
                        <li><a href="#">Thuế</a></li>
                        <li><a href="#">Thẻ quà tặng</a></li>
                        <li><a href="#">Launchpool</a></li>
                        <li><a href="#">Đầu tư Tự động</a></li>
                        <li><a href="#">Staking ETH</a></li>
                        <li><a href="#">NFT</a></li>
                        <li><a href="#">BNB</a></li>
                        <li><a href="#">BABT</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Charity</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Kinh doanh</h3>
                    <ul>
                        <li><a href="#">Đăng ký Thương nhân P2P</a></li>
                        <li><a href="#">Ứng dụng dành cho thương nhân P2Pro</a></li>
                        <li><a href="#">Đăng ký niêm yết coin</a></li>
                        <li><a href="#">Dịch vụ cho tổ chức và VIP</a></li>
                        <li><a href="#">Lab</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Học hỏi</h3>
                    <ul>
                        <li><a href="#">Tìm hiểu kiến thức và kiếm tiền</a></li>
                        <li><a href="#">Xem giá tiền mã hóa</a></li>
                        <li><a href="#">Giá Bitcoin</a></li>
                        <li><a href="#">Giá Ethereum</a></li>
                        <li><a href="#">Duyệt xem các dự đoán về giá tiền mã hóa</a></li>
                        <li><a href="#">Dự đoán giá Bitcoin</a></li>
                        <li><a href="#">Dự đoán giá Ethereum</a></li>
                        <li><a href="#">Mua Bitcoin</a></li>
                        <li><a href="#">Mua BNB</a></li>
                        <li><a href="#">Mua Ripple</a></li>
                        <li><a href="#">Mua Dogecoin</a></li>
                        <li><a href="#">Mua Ethereum</a></li>
                        <li><a href="#">Mua altcoin có thể giao dịch</a></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Hỗ trợ</h3>
                    <ul>
                        <li><a href="#">Chat hỗ trợ 24/7</a></li>
                        <li><a href="#">Trung tâm trợ giúp</a></li>
                        <li><a href="#">Phản hồi và đề xuất về sản phẩm</a></li>
                        <li><a href="#">Phí giao dịch</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Xác minh Binance</a></li>
                        <li><a href="#">Quy tắc giao dịch</a></li>
                        <li><a href="#">Công Airdrop Binance</a></li>
                        <li><a href="#">Câu hỏi Thực thi Pháp luật</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.languageAndCurrency}>
                    <span>🌐 Tiếng Việt</span>
                    <span>💵 USD-$</span>
                    <span>🌙 Chủ đề</span>
                </div>
                <div className={styles.icons}>
                    <div className={styles.giftIcon}>
                        🎁
                    </div>
                    <div className={styles.helpIcon}>
                        ❓
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>Binance© 2024</span>
                <span>Tùy chọn Cookie</span>
            </div>
        </footer>
    );
};

export default Footer;
