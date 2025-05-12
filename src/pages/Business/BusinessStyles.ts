import styled from 'styled-components';

export const BusinessContainer = styled.div`
  width: 100%;
`;

export const BusinessHeader = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const BusinessTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const BusinessContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 ${props => props.theme.spacing.medium};
  }
`;

export const BusinessSection = styled.section`
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
  margin-bottom: ${props => props.theme.spacing.xlarge};
  
  p {
    margin-bottom: ${props => props.theme.spacing.medium};
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.large};
  border-radius: 4px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${props => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.quality:before {
    content: '🏆';
    font-size: 40px;
  }
  
  &.customization:before {
    content: '⚙️';
    font-size: 40px;
  }
  
  &.support:before {
    content: '📞';
    font-size: 40px;
  }
  
  &.delivery:before {
    content: '🚚';
    font-size: 40px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.xlarge};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceItem = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ServiceInfo = styled.div`
  padding: ${props => props.theme.spacing.large};
`;

export const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
`;

export const TestimonialSection = styled.section`
  margin-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialItem = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.large};
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.large};
  font-style: italic;
  
  &:before {
    content: '"';
    font-size: 42px;
    color: ${props => props.theme.colors.accent};
    line-height: 0;
    position: relative;
    top: 20px;
  }
`;

export const TestimonialAuthor = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const TestimonialCompany = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const CTASection = styled.section`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const CTADescription = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

export const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.xlarge};
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`; 