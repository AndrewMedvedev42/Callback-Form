import styled from 'styled-components'
import { IoIosMail } from 'react-icons/io';

export const SuccessfullSubmitMessage = () => {
    return (
        <MainSection>
            <MessageBox>
                <IoIosMail className="big_icon" size={200}/>
                <Heading>Letter successfullly submited!</Heading>
            </MessageBox>
        </MainSection>
    )
}

const Heading = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  color:#3E3E3E;
  margin-bottom:30px;
`

const MessageBox = styled.div`

    text-align:center;
`;

const MainSection = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;