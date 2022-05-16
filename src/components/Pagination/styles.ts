import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 14px;

  li {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.02em;
    
    color: #858585;
    
    & + li {
      margin-left: 14px;
    }
  }
  
  #middlePagination {
    background: #F54A48;
    border-radius: 3px;
    color: var(--shape);  
  }
  
`