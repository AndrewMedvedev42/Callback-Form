import styled from 'styled-components'
import axios from "axios";
import GlobalStyles from "./globalStyles"

function App() {
  const sendMessageData = (e) => {
    e.preventDefault()
    const userMessageObject = {
      userName:e.target.userName.value,
      userEmail:e.target.userEmail.value,
      userText:e.target.userText.value
    }

    axios.post(`http://localhost:8000/api/send-message`, userMessageObject)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <MainContainer>
      <GlobalStyles/>
      <FormSection className="form_sectiom">
        <Form className="form" onSubmit={sendMessageData}>
          <input name="userName" className="input_field" type="name" placeholder="Your name" required/>
          <input name="userEmail" className="input_field" type="email" placeholder="Your email" required/>
          <textarea name="userText" className="input_field text_area" placeholder="Your message" required/>
          <Button className="submit_button">Send message</Button>
        </Form>
      </FormSection>
      <Footer>
      </Footer>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  height:100vh;
  @media (max-width: 768px) {
    .submit_button{
      align-self: stretch;
    }
  }
`

const FormSection = styled.div`
  margin: 0 50px;
  height:80%;
  display:flex;
  align-items:center;
`;

const Form = styled.form`
  width:50%;
  display:flex;
  flex-direction: column;
  .input_field{
    font-size:18px;
    margin-bottom:8px;
    padding:15px 23px;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
  }
  .text_area{
    height:189px;
    margin-bottom:23px;
  }
  @media (max-width: 768px) {
    width:100%;
  }
`;

const Button = styled.button`
  cursor:pointer;
  transition:.5s;
  color:white;
  font-size: 18px;
  background: #FAD34F;
  padding: 15px 25px 16px;
  border:none;
  border-radius: 500px;
  align-self: start;
  &:hover{
    background: #faa84f;
  }
`;

const Footer = styled.div`
  height:20%;
  background:#FAFAFA;
  border-top: 5px solid #D8D8D8;
`
