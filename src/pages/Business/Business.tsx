import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BusinessContainer,
  BusinessHeader,
  BusinessTitle,
  BusinessContent,
  BusinessSection,
  SectionTitle,
  SectionContent,
  FeatureGrid,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ServiceGrid,
  ServiceItem,
  ServiceImage,
  ServiceInfo,
  ServiceTitle,
  ServiceDescription,
  CTASection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton,
  TestimonialSection,
  TestimonialGrid,
  TestimonialItem,
  TestimonialQuote,
  TestimonialAuthor,
  TestimonialCompany
} from './BusinessStyles';

const Business: React.FC = () => {
  const { t, i18n } = useTranslation(['common']);

  return (
    <BusinessContainer>
      <BusinessHeader>
        <BusinessTitle>{t('business.title')}</BusinessTitle>
      </BusinessHeader>
      
      <BusinessContent>
        <BusinessSection>
          <SectionTitle>{t('business.intro.title')}</SectionTitle>
          <SectionContent>
            <p>{t('business.intro.description')}</p>
          </SectionContent>
          
          <FeatureGrid>
            <FeatureItem>
              <FeatureIcon className="quality" />
              <FeatureTitle>{t('business.features.quality.title')}</FeatureTitle>
              <FeatureDescription>
                {t('business.features.quality.description')}
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon className="customization" />
              <FeatureTitle>{t('business.features.customization.title')}</FeatureTitle>
              <FeatureDescription>
                {t('business.features.customization.description')}
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon className="support" />
              <FeatureTitle>{t('business.features.support.title')}</FeatureTitle>
              <FeatureDescription>
                {t('business.features.support.description')}
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon className="delivery" />
              <FeatureTitle>{t('business.features.delivery.title')}</FeatureTitle>
              <FeatureDescription>
                {t('business.features.delivery.description')}
              </FeatureDescription>
            </FeatureItem>
          </FeatureGrid>
        </BusinessSection>
        
        <BusinessSection>
          <SectionTitle>{t('business.services.title')}</SectionTitle>
          
          <ServiceGrid>
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="办公设备解决方案" /> */}
              <ServiceInfo>
                <ServiceTitle>{t('business.services.office.title')}</ServiceTitle>
                <ServiceDescription>
                  {t('business.services.office.description')}
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="智能办公空间设计" /> */}
              <ServiceInfo>
                <ServiceTitle>{t('business.services.space.title')}</ServiceTitle>
                <ServiceDescription>
                  {t('business.services.space.description')}
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="企业礼品定制" /> */}
              <ServiceInfo>
                <ServiceTitle>{t('business.services.gifts.title')}</ServiceTitle>
                <ServiceDescription>
                  {t('business.services.gifts.description')}
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="设备租赁服务" /> */}
              <ServiceInfo>
                <ServiceTitle>{t('business.services.rental.title')}</ServiceTitle>
                <ServiceDescription>
                  {t('business.services.rental.description')}
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
          </ServiceGrid>
        </BusinessSection>
        
        <TestimonialSection>
          <SectionTitle>{t('business.testimonials.title')}</SectionTitle>
          
          <TestimonialGrid>
            <TestimonialItem>
              <TestimonialQuote>
                {t('business.testimonials.1.quote')}
              </TestimonialQuote>
              <TestimonialAuthor>{t('business.testimonials.1.author')}</TestimonialAuthor>
              <TestimonialCompany>{t('business.testimonials.1.company')}</TestimonialCompany>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialQuote>
                {t('business.testimonials.2.quote')}
              </TestimonialQuote>
              <TestimonialAuthor>{t('business.testimonials.2.author')}</TestimonialAuthor>
              <TestimonialCompany>{t('business.testimonials.2.company')}</TestimonialCompany>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialQuote>
                {t('business.testimonials.3.quote')}
              </TestimonialQuote>
              <TestimonialAuthor>{t('business.testimonials.3.author')}</TestimonialAuthor>
              <TestimonialCompany>{t('business.testimonials.3.company')}</TestimonialCompany>
            </TestimonialItem>
          </TestimonialGrid>
        </TestimonialSection>
        
        <CTASection>
          <CTAContent>
            <CTATitle>{t('business.cta.title')}</CTATitle>
            <CTADescription>
              {t('business.cta.description')}
            </CTADescription>
            <CTAButton href="/contact">{t('business.cta.button')}</CTAButton>
          </CTAContent>
        </CTASection>
      </BusinessContent>
    </BusinessContainer>
  );
};

export default Business; 