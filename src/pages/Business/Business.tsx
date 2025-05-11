import React from 'react';
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
  return (
    <BusinessContainer>
      <BusinessHeader>
        <BusinessTitle>对于企业客户</BusinessTitle>
      </BusinessHeader>
      
      <BusinessContent>
        <BusinessSection>
          <SectionTitle>为什么选择EtherSpark企业方案</SectionTitle>
          <SectionContent>
            <p>EtherSpark为企业客户提供全方位的科技产品解决方案，从高端办公设备到智能会议系统，我们致力于为企业提升工作效率和创造现代化的工作环境。无论是初创企业还是大型跨国公司，我们都能提供定制化的科技产品方案。</p>
          </SectionContent>
          
          <FeatureGrid>
            <FeatureItem>
              <FeatureIcon className="quality" />
              <FeatureTitle>高品质保证</FeatureTitle>
              <FeatureDescription>
                所有产品均采用最优质的材料和最严格的生产标准，确保长期稳定运行。
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon className="customization" />
              <FeatureTitle>定制化方案</FeatureTitle>
              <FeatureDescription>
                根据企业特定需求提供个性化产品配置，满足不同行业的特殊要求。
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon className="support" />
              <FeatureTitle>专业技术支持</FeatureTitle>
              <FeatureDescription>
                企业专属客服团队，提供7*24小时技术支持，确保设备正常运行。
              </FeatureDescription>
            </FeatureItem>
            
            <FeatureItem>
              <FeatureIcon className="delivery" />
              <FeatureTitle>快速配送安装</FeatureTitle>
              <FeatureDescription>
                提供快速配送和专业安装服务，最快24小时内完成从下单到安装的全过程。
              </FeatureDescription>
            </FeatureItem>
          </FeatureGrid>
        </BusinessSection>
        
        <BusinessSection>
          <SectionTitle>我们的企业服务</SectionTitle>
          
          <ServiceGrid>
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="办公设备解决方案" /> */}
              <ServiceInfo>
                <ServiceTitle>办公设备解决方案</ServiceTitle>
                <ServiceDescription>
                  提供高端办公设备，包括智能工作站、会议系统、多媒体设备等，提升办公效率和体验。
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="智能办公空间设计" /> */}
              <ServiceInfo>
                <ServiceTitle>智能办公空间设计</ServiceTitle>
                <ServiceDescription>
                  结合空间规划和科技产品，打造智能化、人性化的现代办公环境，提升员工满意度。
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="企业礼品定制" /> */}
              <ServiceInfo>
                <ServiceTitle>企业礼品定制</ServiceTitle>
                <ServiceDescription>
                  提供高品质企业礼品定制服务，包括品牌定制、礼盒设计等，展现企业专业形象。
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              {/* <ServiceImage src="https://via.placeholder.com/500x300" alt="设备租赁服务" /> */}
              <ServiceInfo>
                <ServiceTitle>设备租赁服务</ServiceTitle>
                <ServiceDescription>
                  为企业提供设备租赁服务，包括短期项目设备需求、大型活动设备支持等，降低企业固定资产投入。
                </ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
          </ServiceGrid>
        </BusinessSection>
        
        <TestimonialSection>
          <SectionTitle>客户评价</SectionTitle>
          
          <TestimonialGrid>
            <TestimonialItem>
              <TestimonialQuote>
                "EtherSpark的产品不仅设计美观，而且质量可靠。他们的企业客户服务团队非常专业，帮助我们完成了办公室的全面技术升级。"
              </TestimonialQuote>
              <TestimonialAuthor>张总监</TestimonialAuthor>
              <TestimonialCompany>科技创新有限公司</TestimonialCompany>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialQuote>
                "作为一家设计公司，我们对设备的要求非常高。EtherSpark提供的解决方案完美满足了我们的需求，提升了工作效率。"
              </TestimonialQuote>
              <TestimonialAuthor>李设计总监</TestimonialAuthor>
              <TestimonialCompany>创意设计工作室</TestimonialCompany>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialQuote>
                "从采购到安装，EtherSpark的企业服务团队全程专业高效。产品质量优异，售后服务及时，是值得信赖的合作伙伴。"
              </TestimonialQuote>
              <TestimonialAuthor>王经理</TestimonialAuthor>
              <TestimonialCompany>国际贸易有限公司</TestimonialCompany>
            </TestimonialItem>
          </TestimonialGrid>
        </TestimonialSection>
        
        <CTASection>
          <CTAContent>
            <CTATitle>准备提升您的企业科技体验？</CTATitle>
            <CTADescription>
              联系我们的企业客户团队，获取专属解决方案和优惠报价。
            </CTADescription>
            <CTAButton href="/contact">联系我们</CTAButton>
          </CTAContent>
        </CTASection>
      </BusinessContent>
    </BusinessContainer>
  );
};

export default Business; 