import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;
  user-select: none;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: flex-end;
  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;
export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;
  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
  margin-left: 60px;
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 750px) {
    margin-left: 0;
    grid-template-columns: repeat(3, 1fr);
    width: 350px;
  }
`;
