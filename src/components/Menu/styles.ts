import Image from 'next/image';
import { Resizable } from 're-resizable';
import styled from 'styled-components';

export const Container = styled(Resizable)`
  box-shadow: 5px 0px 8px 0px ${({ theme }) => theme.comment}33;
  background-color: ${({ theme }) => theme.currentLine};
`;

export const ListMenuOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 32px 0;
`;

export const MenuSeparator = styled.hr`
  width: 85%;
  height: 1px;
  background-color: ${({ theme }) => theme.comment};
  margin: 10px 0;
  border: 0;
`;

export const Highlight = styled.div`
  width: 75%;
  height: 46px;
  background-color: ${({ theme }) => theme.background};
  padding: 10px;
  border-radius: 10px;
  opacity: 0;
  contain: strict;
  position: absolute;
  left: 12.25%;
  top: 0;
  transition-property: width, transform, opacity;
`;

export const MenuOption = styled.li`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: filter 0.4s;
  font-size: 16px;
  height: 46px;
  font-weight: 500;
  user-select: none;

  &:hover {
    filter: brightness(0.85);
  }

  &:hover ${Highlight} {
    opacity: 1;
  }
`;

export const MenuOptionPage = styled(MenuOption)`
  transition: background-color 0.4s;
  padding: 10px;
  border-radius: 10px;
  z-index: 10;

  &:hover {
    filter: brightness(1) !important;
  }
`;

export const Avatar = styled(Image).attrs({
  width: 48,
  height: 48,
})`
  border-radius: 48px;
`;
