import styled from "styled-components";

export const LoginImg = styled.img`
  width: 50.88vw;
  position: absolute;
  height: 100vh;
  right: 0;
  top: 0px;
  bottom: 0px;
`

export const LoginCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 17.38% auto;
  width: 425px;
  max-width: 28vw;
  max-height: 70vh;

  font-weight: 500;
  font-size: 14px;

  letter-spacing: -0.03em;

  color: var(--gray);

  input {
    margin-bottom: 30px;
    height: 36px;
    width: 100%;
    border-radius: 3px;
    background: var(--input);   
    border: 1px solid var(--stroke);

    font-weight: 400;
    font-size: 13px;
    line-height: 120%;
   
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    color: var(--light-gray);
    
    ::placeholder {
      color: var(--light-gray);
    }

    outline: none;
    padding: 10px 15px;

    :focus::-webkit-input-placeholder {
      color: transparent;
    }
  }

  .validInput {
    border: 1.5px solid var(--confirmation);
  }

  #validIcon {
    position: absolute;
    right: 15px;
    top: 28px; 
    height: 14px;
    width: 14px;
    padding: 2px;
  
    border-radius: 50%;
    background-color: var(--confirmation) ;
  }
  
  .errorInput {
    border: 1.5px solid #FA982F;
  }

  #errorIcon {
    position: absolute;
    right: 15px;
    top: 28px; 
  }

  label {
    border-radius: nullpx;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    flex-direction: column;

    letter-spacing: -0.03em;
    color: var(--gray);
    margin-bottom: 6px;

    position: relative;
  }

  .title {
    margin-bottom: 70px;
    
    h1 {
      color: var(--dark-gray);
      margin-bottom: 18px;
      font-weight: 600;
      font-size: 38.0001px;
    }

    span {
      color: var(--light-gray);
    }
  }

  button {
    margin: 40px 0;
  }

  a {
    color: var(--primary-red);
    text-decoration: none;
  }

  #forgotPassword {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  #loginCheckbox {
    width: 24px;
    height: 24px;
    background: var(--primary-red);
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

`

export const LeftPanelLogin = styled.section`
  position: absolute; 
  bottom: 0;
  top: 0;
  left: 0;
  width: 49.12vw; 

  #logoLogin {
    margin: 6.8% 0 0 7.8%;
  }
`

