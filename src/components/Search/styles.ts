import styled from "styled-components";

export const SearchWrapper = styled.div`
  /* border: solid; */
  position: relative;
  display: flex;
  align-items: center;
  
  input {
    height: 44px;
    width: 430px;
    border-radius: 3px;
  }

  #search {
    height: 20px;
    width: 20px;
    right: 12px;
    position: absolute;
    
    #icon1 {
      width: 13.33px;
      height: 13.33px;
      top: 2.5px;
      left:  2.5px;
      
      position: absolute;
      left: 12.5%;
      right: 20.83%;
      top: 12.5%;
      bottom: 20.83%;
    }
    
    #icon2 {
      height: 4.625px;
      width: 4.625001907348633px;

      position: absolute;
      left: 63.38%;
      right: 12.5%;
      top: 63.38%;
      bottom: 12.5%;
    }
  }
`