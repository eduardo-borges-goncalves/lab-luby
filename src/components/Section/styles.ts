import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 15px;

  background: var(--shape);
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  
  border: 1px solid var(--stroke);
  border-radius: 3px;

  header, .previousNext {
    display: flex;
    align-items: center;
  }

  header {
    height: 80px;
    justify-content: space-between;

    h2 {
      margin-left: 15px;
      font-size: 20px;
      line-height: 30px;
    }
  }

  #pagination {
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
  }
`
