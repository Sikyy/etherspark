import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
`;

export const ContactHeader = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.large};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const ContactTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 ${props => props.theme.spacing.medium};
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xxlarge};
  margin-bottom: ${props => props.theme.spacing.xxlarge};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.medium};
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xlarge};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.medium};
`;

export const InfoIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.accent};
  
  &.location:before {
    content: '📍';
    font-size: 20px;
  }
  
  &.phone:before {
    content: '📞';
    font-size: 20px;
  }
  
  &.email:before {
    content: '✉️';
    font-size: 20px;
  }
  
  &.hours:before {
    content: '🕒';
    font-size: 20px;
  }
`;

export const InfoText = styled.div``;

export const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.accent};
`;

export const InfoDetail = styled.p`
  font-size: 15px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.small};
  line-height: 1.5;
`;

export const FormSection = styled.div`
  width: 100%;
  position: relative;
`;

export const ContactForm = styled.form`
  width: 100%;
  position: relative;
`;

export const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
  position: relative;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  transition: all 0.3s;
  
  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0.6;
    font-weight: 300;
  }
  
  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
    box-shadow: 0 1px 0 0 ${props => props.theme.colors.accent};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  min-height: 180px;
  resize: vertical;
  transition: all 0.3s;
  
  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0.6;
    font-weight: 300;
  }
  
  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
    box-shadow: 0 1px 0 0 ${props => props.theme.colors.accent};
  }
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.xlarge};
  margin-top: ${props => props.theme.spacing.medium};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: #000;
    transform: translateY(-3px);
  }
`;

export const SuccessMessage = styled.div`
  background-color: transparent;
  border-left: 3px solid #28a745;
  color: #28a745;
  padding: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  font-weight: 500;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ContactMap = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.xxlarge};
  margin-top: 200px;
  
  iframe {
    width: 100%;
    height: 450px;
    border: none;
  }
`;

export const ContactOffices = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.large};
  margin-bottom: ${props => props.theme.spacing.xxlarge};
  
  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: ${props => props.theme.spacing.xlarge};
    text-align: center;
  }
  
  .offices-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${props => props.theme.spacing.xlarge};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const OfficeItem = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.large};
  border-radius: 4px;
  text-align: center;
`;

export const OfficeTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const OfficeAddress = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
`; 