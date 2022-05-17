import styled from "styled-components";
import { ListElement } from "../../components/CardCarsList/style";
import { HeaderElement } from "../../components/CarsList/styles";

export const EmployeeListElement = styled.span`
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -0.02em;
  line-height: 24px;
  padding: 5px;

  word-break: break-all;

  width: 198.75px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const EmployeeHeaderElement = styled(HeaderElement)`
  justify-content: flex-start;
`