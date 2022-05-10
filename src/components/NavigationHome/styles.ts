import styled from "styled-components";

export const NavigationHomeWrapper = styled.nav`
  margin: 65px 0 0;
  padding: 0 0 92px;
  
  header {
    
    h3 {
      margin-bottom: 5px;

      font-size: 30px;
      font-weight: 600;
      line-height: 45px;
      letter-spacing: -0.02em;
      text-align: left;

      color: var(--dark-gray);
    }
    
    span {
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: -0.02em;
      text-align: right;
      
      color: var(--gray);
    }

    margin-bottom: 30px;
  }

  div {
    & + div {
      margin-top: 20px;
    }
  }
`
