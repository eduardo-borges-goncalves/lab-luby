import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
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

  label {
    height: 17px;
    width: 128px;
    border-radius: nullpx;

    font-weight: 600;
    font-size: 14px;
    line-height: 120%;

    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: var(--gray);
    margin-bottom: 6px;
  }
`