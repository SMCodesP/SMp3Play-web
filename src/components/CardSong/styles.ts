import styled from 'styled-components';

export const Thumbnail = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  filter: brightness(75%) blur(0.04em);
  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(100%);
  }
`;

export const SongTitle = styled.p`
  font-size: 1em;
  font-family: 'Rubik';
  font-weight: 600;
  color: ${({ theme }) => theme.selection};
  margin: 10px 25px 0 0;
  padding: 0;
`;

export const SongAuthor = styled.p`
  font-weight: 600;
  font-size: 0.75em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.comment};
`;
