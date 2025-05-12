import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.xxlarge} 0;
`;

export const AboutHeader = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const AboutTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 ${props => props.theme.spacing.medium};
  }
`;

export const AboutSection = styled.section`
  margin-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.large};
  position: relative;
  padding-bottom: ${props => props.theme.spacing.medium};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
  
  p {
    margin-bottom: ${props => props.theme.spacing.large};
  }
  
  ul {
    margin-left: ${props => props.theme.spacing.large};
    margin-bottom: ${props => props.theme.spacing.large};
    
    li {
      margin-bottom: ${props => props.theme.spacing.small};
    }
  }
`;

export const CompanyStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.large};
  margin: ${props => props.theme.spacing.xxlarge} 0;
  padding: ${props => props.theme.spacing.xlarge} 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.accent};
`;

export const StatLabel = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const TeamSection = styled.section`
  margin-bottom: ${props => props.theme.spacing.xxlarge};
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${props => props.theme.spacing.large};
    
    @media (max-width: ${props => props.theme.breakpoints.laptop}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const TeamMember = styled.div`
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

export const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const MemberInfo = styled.div``;

export const MemberName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const MemberPosition = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
`; 