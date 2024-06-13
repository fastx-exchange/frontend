// next-intl.config.js

module.exports = {
    locales: ['en', 'fr'], // Danh sách các ngôn ngữ được hỗ trợ
    defaultLocale: 'en', // Ngôn ngữ mặc định
    localeDetection: true, // Cho phép phát hiện ngôn ngữ tự động
    pagesDir: './pages', // Thư mục chứa các trang có thể dịch
    localePath: './public/locales', // Thư mục chứa các tệp ngôn ngữ
    loadLocaleFrom: (locale, namespace) =>
      import(`./src/locales/${locale}/${namespace}.json`), // Hàm tải ngôn ngữ
  };
  