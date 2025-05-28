import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  AboutContainer, 
  AboutHeader, 
  AboutTitle, 
  AboutContent, 
  AboutSection, 
  SectionTitle, 
  SectionContent,
  TeamSection,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberPosition,
  CompanyStats,
  StatItem,
  StatNumber,
  StatLabel
} from './AboutStyles';

const About: React.FC = () => {
  const { t, i18n } = useTranslation(['common']);

  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>{t('about.title')}</AboutTitle>
      </AboutHeader>
      
      <AboutContent>
        <AboutSection>
          <SectionTitle>{t('about.story.title')}</SectionTitle>
          <SectionContent>
            <p>{t('about.story.p1')}</p>
            <p>{t('about.story.p2')}</p>
            <p>{t('about.story.p3')}</p>
          </SectionContent>
        </AboutSection>
        
        <CompanyStats>
          <StatItem>
            <StatNumber>5+</StatNumber>
            <StatLabel>{t('about.stats.years')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>{t('about.stats.products')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>10k+</StatNumber>
            <StatLabel>{t('about.stats.customers')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5</StatNumber>
            <StatLabel>{t('about.stats.branches')}</StatLabel>
          </StatItem>
        </CompanyStats>
        
        <AboutSection>
          <SectionTitle>{t('about.philosophy.title')}</SectionTitle>
          <SectionContent>
            <p>{t('about.philosophy.intro')}</p>
            <ul>
              <li><strong>{t('about.philosophy.design')}</strong> - {t('about.philosophy.designText')}</li>
              <li><strong>{t('about.philosophy.userCentric')}</strong> - {t('about.philosophy.userCentricText')}</li>
              <li><strong>{t('about.philosophy.quality')}</strong> - {t('about.philosophy.qualityText')}</li>
              <li><strong>{t('about.philosophy.sustainable')}</strong> - {t('about.philosophy.sustainableText')}</li>
            </ul>
          </SectionContent>
        </AboutSection>
        
        <TeamSection>
          <SectionTitle>{t('about.team.title')}</SectionTitle>
          <div className="team-grid">
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="张明 - CEO" />
              <MemberInfo>
                <MemberName>张明</MemberName>
                <MemberPosition>{t('about.team.ceo')}</MemberPosition>
              </MemberInfo>
            </TeamMember>
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="李娜 - 设计总监" />
              <MemberInfo>
                <MemberName>李娜</MemberName>
                <MemberPosition>{t('about.team.designDirector')}</MemberPosition>
              </MemberInfo>
            </TeamMember>
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="王强 - 技术总监" />
              <MemberInfo>
                <MemberName>王强</MemberName>
                <MemberPosition>{t('about.team.techDirector')}</MemberPosition>
              </MemberInfo>
            </TeamMember>
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="陈梅 - 市场总监" />
              <MemberInfo>
                <MemberName>陈梅</MemberName>
                <MemberPosition>{t('about.team.marketingDirector')}</MemberPosition>
              </MemberInfo>
            </TeamMember>
          </div>
        </TeamSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 