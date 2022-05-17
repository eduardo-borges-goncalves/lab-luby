import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    :root {
        --background: #E5E5E5;
        --shape: #FFFFFF;
        --input: #F9F9F9;
        --stroke: #E6E6E6;
   
        --gray: #7C7C7C;
        --dark-gray: #3C3C3C;
        --light-gray: #A2A2A2;

        --primary-red: #F54A48;
        --secondary-red: #DF3938;
        --alert: #FAC12F;
        --confirmation: #34C38F;
        --error: #FA982F;

        --text-title: #495057;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87,5%;
        }
    }

    body {
        background-color: var(--background); 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: 'Poppins', sans-serif;
        font-style: normal;  
    }

    button {
        cursor: pointer;
    }
`