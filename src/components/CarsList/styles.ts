import styled from "styled-components";

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  
  width: 100%;
  height: 71px;

  border-radius: 3px;
  background-color: var(--input);
`

export const HeaderElement = styled.span`
  width: 198.75px;
  height: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray);
  padding: 5px;

  word-break: break-all;
`
