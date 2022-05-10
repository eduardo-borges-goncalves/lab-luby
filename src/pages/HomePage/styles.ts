import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* border: solid red; */

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 120px;

  nav {

    header {

      h3 {
        margin-bottom: 5px;
      }

      margin-bottom: 30px;
    }

    display: flex;
    /* gap: 20px; */
    flex-direction: column;

    div {
      & + div {
        margin-top: 20px;
      }
    }

  }

`
