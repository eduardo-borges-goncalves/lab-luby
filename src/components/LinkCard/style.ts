import styled from "styled-components";

export const LinkCardWrapper = styled.div`

  a {
    display: flex;
 
    background-color: var(--shape);
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);

    width: 800px;
    height: 200px;
    
    border: 1px solid var(--stroke);
    border-radius: 3px;

    text-decoration: none;
    transition: all ease-out 0.3s;
  
    :hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 30px rgba(162, 162, 162, 0.3);
    }

    #cardInformation {
      display: flex;
      flex-direction: column;
      gap: 10px;

      padding: 30px;
      position: relative;
      width: 100%;
    }

    h2, p {
      max-width: 450px;
    }

    h2, p, span {
      font-style: normal;

      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
    }

    h2 {
      height: 39px;
      
      font-weight: 600;
      font-size: 26px;
      line-height: 39px;

      color: var(--dark-gray);
    }

    p {
      height: 27px;

      font-weight: 500;
      font-size: 18px;
      line-height: 27px;

      color: var(--gray);
    }

    span {
      max-width: 140px;
      height: 20px;
      
      font-weight: 700;
      font-size: 13px;
      line-height: 20px;
      
      justify-content: flex-end;
      text-transform: uppercase;
      
      color: var(--primary-red);
      
      position: absolute;
      right: 30px; 
      bottom: 30px;
    }
  }
` 