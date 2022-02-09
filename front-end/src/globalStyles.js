import {createGlobalStyle} from "styled-components"

//GLOBAL STYLES

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        margin:0;
        font-family: Arial, sans-serif;
    }

    .input_field, .text_area{
        width:100%;
    }

    .input_field{
        font-size:18px;
        margin-bottom:8px;
        padding:15px 23px;
        border: 1px solid #DCDCDC;
        border-radius: 10px;
    }

    .text_area{
        height:189px;
        resize: none;
        margin-bottom:23px;
    }

    .submit_button{
        background: #FAD34F;
    }

    .submit_button:hover{
        background: #faa84f;
    }

    .loading_button{
        background: #bbbbbb;
    }

    .icon_section{
        width:50%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .icon{
        color:#696969;
        margin-left:25px;
    }

    .big_icon{
        color:#FAD34F;
    }

    @media (max-width: 900px) {
        .form_sectiom, .icon_section{
            width:90%;
        }
        .submit_button{
          align-self: stretch;
        }
    }
`

export default GlobalStyles