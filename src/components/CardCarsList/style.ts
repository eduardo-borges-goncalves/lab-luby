import styled from "styled-components";
import { HeaderCarsList } from "../CarsList/styles";

export const CardCarsListWrapper = styled(HeaderCarsList)`
  background-color: transparent;
  border-radius: none;

  span {
    color: var(--dark-gray);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`