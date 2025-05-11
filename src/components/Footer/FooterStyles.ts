import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  border-top: 1px solid ${props => props.theme.colors.border};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.xlarge};
  margin-bottom: ${props => props.theme.spacing.xxlarge};
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const LogoSection = styled.div`
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: ${props => props.theme.spacing.medium};
  }
  
  p {
    margin-bottom: ${props => props.theme.spacing.large};
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.5;
  }
`;

export const CompanyInfo = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  
  p {
    margin-bottom: ${props => props.theme.spacing.small};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 14px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
`;

export const SocialIcon = styled.div`
  transition: opacity 0.3s ease;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: ${props => props.theme.colors.text};
    font-size: 22px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    opacity: 0.7;
    
    a {
      transform: translateY(-3px);
    }
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SupportSection = styled(FooterSection)`
  /* 不再向左偏移 */
`;

export const FooterTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.large};
  text-transform: uppercase;
  text-align: center;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  align-items: center;
`;

export const FooterItem = styled.li`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

export const FooterBottom = styled.div`
  padding-top: ${props => props.theme.spacing.large};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const Copyright = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`; 
