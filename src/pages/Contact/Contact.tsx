import React, { useState } from 'react';
import {
  ContactContainer,
  ContactHeader,
  ContactTitle,
  ContactContent,
  ContactInfo,
  ContactForm,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoTitle,
  InfoDetail,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  ContactMap,
  ContactOffices,
  OfficeItem,
  OfficeTitle,
  OfficeAddress,
  SuccessMessage,
  ContactWrapper,
  FormSection
} from './ContactStyles';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 在实际应用中，这里应该发送API请求
    console.log('表单提交', formState);
    
    // 模拟提交成功
    setFormSubmitted(true);
    
    // 重置表单
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // 5秒后隐藏成功消息
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>联系我们</ContactTitle>
      </ContactHeader>
      
      {/* 第一部分：联系表单 */}
      <ContactWrapper>
        <ContactContent>
          <ContactInfo>
            <InfoItem>
              <InfoText>
                <InfoTitle>地址</InfoTitle>
                <InfoDetail>莫斯科, Каширское шоссе 61к3А, павильон Б26</InfoDetail>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoText>
                <InfoTitle>电话</InfoTitle>
                <InfoDetail>+7 (996) 713-12-38</InfoDetail>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoText>
                <InfoTitle>电子邮箱</InfoTitle>
                <InfoDetail>info@etherspark.ru</InfoDetail>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoText>
                <InfoTitle>工作时间</InfoTitle>
                <InfoDetail>周一至周五: 9:00 - 18:00</InfoDetail>
              </InfoText>
            </InfoItem>
          </ContactInfo>
          
          <FormSection>
            <ContactForm onSubmit={handleSubmit}>
              {formSubmitted && (
                <SuccessMessage>
                  您的消息已成功发送！我们会尽快回复您。
                </SuccessMessage>
              )}
              
              <FormGroup>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="您的姓名"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="您的邮箱"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormTextarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="您的留言"
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit">发送消息</SubmitButton>
            </ContactForm>
          </FormSection>
        </ContactContent>
      </ContactWrapper>
      
      {/* 第二部分：全球办公室 */}
      {/* <ContactOffices>
        <h2>全球办公室</h2>
        <div className="offices-grid">
          <OfficeItem>
            <OfficeTitle>莫斯科总部</OfficeTitle>
            <OfficeAddress>
              莫斯科, Каширское шоссе 61к3А, павильон Б26
              <br />
              +7 (996) 713-12-38
            </OfficeAddress>
          </OfficeItem>
          
          <OfficeItem>
            <OfficeTitle>北京办公室</OfficeTitle>
            <OfficeAddress>
              北京市朝阳区建国路88号
              <br />
              +86 10 8888 8888
            </OfficeAddress>
          </OfficeItem>
          
          <OfficeItem>
            <OfficeTitle>上海办公室</OfficeTitle>
            <OfficeAddress>
              上海市浦东新区陆家嘴环路1000号
              <br />
              +86 21 9999 9999
            </OfficeAddress>
          </OfficeItem>
        </div>
      </ContactOffices> */}
      
      {/* 第三部分：地图 */}
      <ContactMap>
        <iframe 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae10a8cc27c33e41c7ea95bf3a1f1f87aa5a5b47a58e4bf04e342a3f499dac3b6&amp;source=constructor"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          title="EtherSpark莫斯科总部位置"
        />
      </ContactMap>
    </ContactContainer>
  );
};

export default Contact; 