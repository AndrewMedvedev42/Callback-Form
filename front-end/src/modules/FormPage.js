import styled from 'styled-components'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { RiLinkedinFill } from 'react-icons/ri';
import { ImTwitter } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';

export const FormPage = () => {
    //TO NAVIGATE THOUGH ROUTES
    const history = useNavigate()
    //LOADING STATE
    const [isLoading, setSetLoading] = useState(false)

    //REDIRECT TO MESSAGE OF SUCCESS
    const successfulSend = (e) => {
        history("/success")
    }
  
    //ALERT ERROR AND DISABLE LOADING BUTTON
    const failedSend = (error) => {
      alert(error)
      setSetLoading(false)
    }
  
    //SEND FORM DATA TO BACKEND
    const sendMessageData = (e) => {
      e.preventDefault()
      setSetLoading(true)
      const userMessageObject = {
        name:e.target.userName.value,
        email:e.target.userEmail.value,
        text:e.target.userText.value
      }
  
      axios.post(`http://localhost:8000/api/send-message`, userMessageObject)
        .then(response => successfulSend())
        .catch(error => failedSend(error))
    }
  
    //ICON SIZE
    const iconSize = 25
  
    return (
        <AppSection>
        <MainSection className="main_section">
          <FormSection className="form_sectiom">
            <Heading>Reach out to us!</Heading>
            <Form className="form" onSubmit={sendMessageData}>
              <input name="userName" className="input_field" type="name" placeholder="Your name" required disabled={isLoading}/>
              <input name="userEmail" className="input_field" type="email" placeholder="Your email" required disabled={isLoading}/>
              <textarea name="userText" className="input_field text_area" placeholder="Your message" required disabled={isLoading}/>
              <Button className={!isLoading ? "submit_button" : "loading_button"}>{!isLoading ? "Send message" : "Sending..."}</Button>
            </Form>
          </FormSection>
        </MainSection>
        <Footer>
            <section className="icon_section">
              <RiLinkedinFill className="icon" size={iconSize}/>
              <ImTwitter className="icon" size={iconSize}/>
              <FaFacebookF className="icon" size={iconSize}/>
              <BsPinterest className="icon" size={iconSize}/>
            </section>
        </Footer>
      </AppSection>
    )
}

//STYLED COMPONENTS
const Heading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  color:#3E3E3E;
  margin-bottom:30px;
`

const AppSection = styled.div`
  height:100vh;
`
const MainSection = styled.div`
  height:80%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const FormSection = styled.div`
  width:50%;
`;

const Form = styled.form`
  display:flex;
  flex-direction: column;
`;

const Button = styled.button`
  cursor:pointer;
  transition:.5s;
  color:white;
  font-size: 18px;
  padding: 15px 25px 16px;
  border:none;
  border-radius: 500px;
  align-self: start;
`;

const Footer = styled.div`
  height:20%;
  background:#FAFAFA;
  border-top: 5px solid #D8D8D8;
`