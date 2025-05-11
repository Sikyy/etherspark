import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SwitcherContainer = styled.div`
  position: fixed;
  top: 45px;
  right: 50px;
  z-index: 100;
  
  @media (max-width: 768px) {
    position: static;
  }
`;

const SwitcherButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 25px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 100%;
  z-index: 100;
`;

const LanguageOption = styled.div`
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 在组件加载时和语言变化时记录当前语言
  useEffect(() => {
    console.log('Current language:', i18n.language);
  }, [i18n.language]);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: string) => {
    console.log('Changing language to:', lang);
    i18n.changeLanguage(lang).then(() => {
      console.log('Language changed to:', i18n.language);
      setIsOpen(false);
    }).catch(err => {
      console.error('Failed to change language:', err);
    });
  };
  
  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const getCurrentLanguageLabel = () => {
    const currentLang = i18n.language;
    console.log('Getting label for language:', currentLang);
    
    switch (currentLang) {
      case 'zh':
      case 'cn':
        return '中文';
      case 'ru':
        return 'Рус';
      case 'en':
        return 'Eng';
      default:
        console.log('Unknown language, defaulting to:', currentLang);
        return currentLang === 'zh' ? '中文' : (currentLang === 'ru' ? 'Рус' : 'Eng');
    }
  };
  
  return (
    <SwitcherContainer className={className} ref={dropdownRef}>
      <SwitcherButton onClick={toggleDropdown}>
        {getCurrentLanguageLabel()}
      </SwitcherButton>
      <LanguageDropdown isOpen={isOpen}>
        <LanguageOption onClick={() => changeLanguage('zh')}>中文</LanguageOption>
        <LanguageOption onClick={() => changeLanguage('ru')}>Рус</LanguageOption>
        <LanguageOption onClick={() => changeLanguage('en')}>Eng</LanguageOption>
      </LanguageDropdown>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher; 