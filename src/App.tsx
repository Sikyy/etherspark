import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import ProductList from './pages/Products/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductLinks from './pages/Products/ProductLinks';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Business from './pages/Business/Business';
import './i18n'; // 导入i18n配置

function App() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // 打印当前加载的语言和资源
    console.log('App loaded with language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Namespaces:', i18n.options.ns);
  }, [i18n]);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductLinks />} />
          <Route path="/:category" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/:category/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Business />} />
          {/* 其他路由可以在这里添加 */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
