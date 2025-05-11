import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faVk, faTiktok } from '@fortawesome/free-brands-svg-icons';
import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  FooterSection,
  SupportSection,
  FooterTitle,
  FooterList,
  FooterItem,
  Copyright,
  CompanyInfo,
  SocialLinks,
  SocialIcon,
  LogoSection
} from 'components/Footer/FooterStyles';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation(['footer', 'common']);
  
  useEffect(() => {
    console.log('Footer component language:', i18n.language);
  }, [i18n.language]);

  return (
    <FooterContainer>
      <FooterTop>
        <LogoSection>
          <h2>{t('brand', { ns: 'common' })}</h2>
          <p>{t('slogan')}</p>
          <CompanyInfo>
            <p>{t('address')}</p>
            <p>{t('contact.phone')}</p>
            <p>{t('contact.email')}</p>
          </CompanyInfo>
          <SocialLinks>
            <SocialIcon>
              <Link to="#"><FontAwesomeIcon icon={faYoutube} /></Link>
            </SocialIcon>
            <SocialIcon>
              <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
            </SocialIcon>
            <SocialIcon>
              <Link to="#"><FontAwesomeIcon icon={faVk} /></Link>
            </SocialIcon>
            <SocialIcon>
              <Link to="#"><FontAwesomeIcon icon={faTiktok} /></Link>
            </SocialIcon>
          </SocialLinks>
        </LogoSection>

        <FooterSection>
          <FooterTitle>{t('sections.products')}</FooterTitle>
          <FooterList>
            <FooterItem>
              <Link to="/tools">{t('links.products.tools')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/scooter">{t('links.products.scooter')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/hair">{t('links.products.hair')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/pet">{t('links.products.pet')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/sound">{t('links.products.sound')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/watch">{t('links.products.watch')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/invehicle">{t('links.products.invehicle')}</Link>
            </FooterItem>
          </FooterList>
        </FooterSection>

        <SupportSection>
          <FooterTitle>{t('sections.support')}</FooterTitle>
          <FooterList>
            <FooterItem>
              <Link to="/about">{t('links.support.about')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/contact">{t('links.support.contact')}</Link>
            </FooterItem>
            <FooterItem>
              <Link to="/careers">{t('links.support.business')}</Link>
            </FooterItem>
          </FooterList>
        </SupportSection>
      </FooterTop>

      <FooterBottom>
        <Copyright>
          {t('copyright', { year: new Date().getFullYear() })}
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 