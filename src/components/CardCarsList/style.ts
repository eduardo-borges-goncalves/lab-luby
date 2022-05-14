import styled from "styled-components";
import { HeaderCarsList, HeaderElement } from "../CarsList/styles";

export const CardCarsListWrapper = styled(HeaderCarsList)`
  background-color: transparent;
  border-radius: none;

`

export const ListElement = styled(HeaderElement)`
  color: var(--dark-gray);
  max-width: 12.5%;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  padding: 10px;

  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`

export const ChassiElement = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 280px;

  color: var(--dark-gray);
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  padding: 10px;

  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`

export const StatusVendido = styled.span`
  width: 102px;
  height: 30px;
  background: rgba(245, 74, 72, 0.2);
  color: var(--primary-red);
  border-radius: 3px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.02em;
`

export const StatusDisponível = styled(StatusVendido)`
  background: rgba(52, 195, 143, 0.2);
  color: var(--confirmation);
`

export const StatusReservado = styled(StatusVendido)`
  background: rgba(250, 193, 47, 0.2);
  color: var(--alert);
`
