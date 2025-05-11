import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { 
  HeaderContainer, 
  Logo, 
  Navigation, 
  NavItem, 
  MobileMenuButton, 
  MobileMenu,
  HeaderTop,
  HeaderBottom
} from 'components/Header/HeaderStyles';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(['header']);

  useEffect(() => {
    console.log('Header component language:', i18n.language);
  }, [i18n.language]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <LanguageSwitcher />
      <HeaderTop>
        <Logo>
          <Link to="/">
            <img src="/ES_Characters_White.png" alt="EtherSpark" />
          </Link>
        </Logo>
      </HeaderTop>

      <HeaderBottom>
        <Navigation>
          <NavItem>
            <Link to="/news">{t('nav.news')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/tools">{t('nav.tools')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/scooter">{t('nav.scooter')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/hair">{t('nav.hair')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/pet">{t('nav.pet')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/sound">{t('nav.sound')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/watch">{t('nav.watch')}</Link>
          </NavItem>
          <NavItem>
            <Link to="/invehicle">{t('nav.invehicle')}</Link>
          </NavItem>
        </Navigation>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? t('close') : t('menu')}
        </MobileMenuButton>

        {mobileMenuOpen && (
          <MobileMenu>
            <NavItem>
              <Link to="/news">{t('nav.news')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/tools">{t('nav.tools')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/scooter">{t('nav.scooter')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/hair">{t('nav.hair')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/pet">{t('nav.pet')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/sound">{t('nav.sound')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/watch">{t('nav.watch')}</Link>
            </NavItem>
            <NavItem>
              <Link to="/invehicle">{t('nav.invehicle')}</Link>
            </NavItem>
          </MobileMenu>
        )}
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header; 