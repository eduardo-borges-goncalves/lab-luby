import styled from "styled-components";

export const CarsContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 680px;
  width: 1620px;

  position: absolute;
  bottom: 94px;
  left: 150px;
  right: 150px;
  top: 165px;

  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--dark-gray);

  h1 {
    margin-bottom: 40px;
    font-size: 30px;
    line-height: 45px;
  }

  h1, h2, header {
    display: flex;
    align-items: center;
  }

  header {
    height: 80px;
    padding: 0 15px;

    justify-content: space-between;

    h2 {
      margin-left: 15px;
      font-size: 20px;
      line-height: 30px;
    }

    .previousNext {
      display: flex;
      gap: 5px;
    }
  }
`
export const CarsSection = styled.section`

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 15px ;

  background: var(--shape);
  border: 1px solid var(--stroke);

  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
`

export const HeaderCarsList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  
  width: 1590px;
  height: 71px;

  border-radius: 3px;
  background-color: var(--input);
  
  span {
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
  }
`

export const CardCarsList = styled(HeaderCarsList)`
  background-color: transparent;
  border-radius: none;

  span {
    color: var(--dark-gray);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`
