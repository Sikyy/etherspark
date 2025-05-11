import React from 'react';
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
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>关于我们</AboutTitle>
      </AboutHeader>
      
      <AboutContent>
        <AboutSection>
          <SectionTitle>我们的故事</SectionTitle>
          <SectionContent>
            <p>EtherSpark（以太花火）成立于2018年，是一家专注于高品质科技产品的设计和销售公司。我们的使命是通过精致的设计和卓越的性能，为用户提供能够改善生活质量的创新科技产品。</p>
            <p>公司名称"EtherSpark"代表我们的愿景：就像以太网连接了全世界，我们希望通过我们的产品在用户生活中点燃科技的火花。我们相信科技应该是美观的、实用的，并且能够无缝融入用户的日常生活。</p>
            <p>从电动滑板车到美发产品，从宠物用品到音频设备，我们的产品线涵盖了多个领域，但所有产品都有一个共同点：精致的设计和卓越的性能。</p>
          </SectionContent>
        </AboutSection>
        
        <CompanyStats>
          <StatItem>
            <StatNumber>5+</StatNumber>
            <StatLabel>年行业经验</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>产品系列</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>10k+</StatNumber>
            <StatLabel>满意客户</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5</StatNumber>
            <StatLabel>全球分支</StatLabel>
          </StatItem>
        </CompanyStats>
        
        <AboutSection>
          <SectionTitle>我们的理念</SectionTitle>
          <SectionContent>
            <p>在EtherSpark，我们坚信以下原则：</p>
            <ul>
              <li><strong>设计至上</strong> - 我们的产品不仅仅是工具，还是艺术品，能够美化您的生活空间。</li>
              <li><strong>用户为中心</strong> - 每个产品的开发都从用户需求出发，解决实际问题。</li>
              <li><strong>品质保证</strong> - 我们使用最优质的材料和最严格的生产标准，确保产品的耐用性。</li>
              <li><strong>可持续发展</strong> - 我们致力于减少环境影响，从产品设计到包装都考虑可持续性。</li>
            </ul>
          </SectionContent>
        </AboutSection>
        
        <TeamSection>
          <SectionTitle>我们的团队</SectionTitle>
          <div className="team-grid">
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="张明 - CEO" />
              <MemberInfo>
                <MemberName>张明</MemberName>
                <MemberPosition>首席执行官</MemberPosition>
              </MemberInfo>
            </TeamMember>
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="李娜 - 设计总监" />
              <MemberInfo>
                <MemberName>李娜</MemberName>
                <MemberPosition>设计总监</MemberPosition>
              </MemberInfo>
            </TeamMember>
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="王强 - 技术总监" />
              <MemberInfo>
                <MemberName>王强</MemberName>
                <MemberPosition>技术总监</MemberPosition>
              </MemberInfo>
            </TeamMember>
            <TeamMember>
              <MemberImage src="https://via.placeholder.com/150" alt="陈梅 - 市场总监" />
              <MemberInfo>
                <MemberName>陈梅</MemberName>
                <MemberPosition>市场总监</MemberPosition>
              </MemberInfo>
            </TeamMember>
          </div>
        </TeamSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 