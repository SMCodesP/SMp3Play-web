import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContainerMain = styled.main`
  width: 100%;
  padding: 15px 25px;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.currentLine} 65%,
    ${({ theme }) => theme.background} 65%
  );
`;

export const Title = styled.h1`
  font-size: 2.75em !important;
  font-family: 'Rubik';
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.selection};
  margin-top: 25px;
`;

export const ListRecentPlay = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  margin: 15px;
`;
