import styled from 'styled-components';
export const TableDiv = styled.div`
  width: 280px;
  padding: 0 16px;

  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const TableTd = styled.td`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  /* padding: 17px 20px; */
  /* width: 395px; */
`;
export const TableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  padding: 16px;
`;
export const TableTrHead = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  padding: 16px;
  margin-top: 20px;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  width: 280px;
  max-height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const TableTh = styled.th`
  /* padding: 16px; */
  display: inline-block;
`;
export const TableH3 = styled.h3`
  margin: 30px auto 10px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  max-width: 300px;
  line-height: 1.5;
  padding: 30px 0;
  border-top: 1px solid white;
  border-bottom: 2px solid white;
  @media only screen and (min-width: 768px) {
    margin: 200px 50px 50px 50px;
  }
`;
export const TableBody = styled.tbody`
  /* padding: 16px; */
  display: flex;
  flex-direction: column;

  max-width: 280px;
  overflow-y: scroll;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
    height: 490px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 395px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(82, 59, 126, 0.3);
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;
