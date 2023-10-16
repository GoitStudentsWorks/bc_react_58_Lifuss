import styled from 'styled-components';

export const StyledStatisticDivMain = styled.div`
  color: white;
  display: block;
  position: relative;
  overflow: hidden;
  min-width: 325px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    justify-content: space-between;
    /* gap: 32px; */
    max-width: 100%;
    height: 720px;
    padding: 20px 32px 0 35px;
    &::after {
      content: '';
      width: 70%;
      height: 362.381px;
      bottom: -30px;
      left: -150px;
      z-index: -1;
      position: absolute;
      border-radius: 362.381px;
      background: linear-gradient(220deg, #6d54eb 28.31%, #652392 66.76%);

      filter: blur(150px);
    }
  }
  @media only screen and (min-width: 1280px) {
    max-width: 803px;
    height: 827px;
    padding: 32px 16px 40px 69px;
    padding: 20px 16px 0 35px;
  }
`;
export const StyledStatisticDivChart = styled.div`
  position: relative;
  width: 280px;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
    &::after {
      content: '';
      width: 330px;
      height: 333px;
      border-radius: 333px;
      background: #6d1c77;
      position: absolute;
      left: 500px;
      bottom: -70px;

      filter: blur(150px);
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
  }
`;
export const StyledStatisticTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  max-width: 280px;
`;
