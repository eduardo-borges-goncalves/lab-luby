import styled from "styled-components";

export const RedBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 100%;
  height: 37px;

  background: var(--primary-red);
  border: none;
  border-radius: 3px;

  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.03em;

  color: var(--shape);

  flex: none;
  order: 0;
  flex-grow: 0;

  transition: all ease-in-out .2s;

  :active {
    transition: none;
    border: 1.5px solid #971212;
  }
  
  :hover{
    background: #DF3938;
  }
`
