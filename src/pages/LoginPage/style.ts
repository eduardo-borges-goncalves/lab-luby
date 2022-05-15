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
  line-height: 120%;
  letter-spacing: -0.03em;

  color: var(--gray);

  .input {
    margin-bottom: 30px;
  }

  .title {
    margin-bottom: 70px;
    
    h1 {
      color: var(--dark-gray);
      margin-bottom: 18px;
      display: flex;
      flex-wrap: wrap;
      word-break: break-all;
      word-wrap: break-word;

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

