import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-top: ${props => props.theme.spacing.small};
`;

export const HeaderTop = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const HeaderBottom = styled.div`
  position: relative;
  width: 100%;
`;

export const Logo = styled.div`
  display: inline-block;
  margin: 10px 0 20px;
  
  img {
    height: 50px;
    width: 320px;
    display: block;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  padding: 20px ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  transition: opacity 0.3s ease;

  a {
    color: inherit;
    text-decoration: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 16px;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: ${props => props.theme.colors.text};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    opacity: 1;
    
    &:after {
      width: calc(100% - ${props => props.theme.spacing.large});
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
    padding: ${props => props.theme.spacing.medium} 0;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.large};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
`;

export const LanguageSelector = styled.button`
  position: fixed;
  top: 45px;
  right: 50px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  padding: 10px 25px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: static;
    padding: 6px 12px;
    font-size: 12px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.3);
  }
`; 