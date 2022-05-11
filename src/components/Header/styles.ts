import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  height: 120px;
  width: 100%;  
  width: 1920px;
  background-color: var(--shape);
  box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 150px;
  }

  #sair {

    span {
      position: static; 
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 120%;
  
      display: flex;
      align-items: center;
      letter-spacing: -0.03em;
  
      color: var(--shape);
    }
    text-decoration: none;

    display: flex;
    gap: 10px;
    
    width: 75px;
    height: 38px;
    padding: 10px;
    
    background-color: var(--primary-red);
    border-radius: 3px;
  }
`