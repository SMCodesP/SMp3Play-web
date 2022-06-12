import React, { Dispatch, memo, SetStateAction } from 'react';
import { useTheme } from 'styled-components';
import { MenuOption, Avatar, MenuOptionPage, MenuSeparator } from './styles';

import { FiBookOpen, FiChevronDown, FiHome, FiSearch } from 'react-icons/fi';
import { BiAddToQueue } from 'react-icons/bi';

const pages = [
  {
    name: `Início`,
    page: `home`,
    icon: FiHome,
  },
  {
    name: `Pesquisar`,
    page: `search`,
    icon: FiSearch,
  },
  {
    name: `Sua biblioteca`,
    page: `library`,
    icon: FiBookOpen,
  },
  {
    name: `separator`,
    page: `separator01`,
  },
  {
    name: `Criar playlist`,
    page: `create-playlist`,
    icon: BiAddToQueue,
  },
];

const ListMenuItems: React.FC<{
  updatePage: (e: any) => void;
  setHighlightActive: Dispatch<SetStateAction<boolean>>;
}> = ({ updatePage, setHighlightActive }) => {
  const theme = useTheme();
  return (
    <>
      <MenuOption
        style={{
          marginBottom: `50px`,
        }}
      >
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art-neutral/${Math.floor(
            Math.random() * 1000,
          )}.svg`}
        />
        <span>SMCodes</span>
        <FiChevronDown color={theme.background} size={16} />
      </MenuOption>
      {pages.map((page) =>
        page.name !== `separator` ? (
          <MenuOptionPage
            key={page.page}
            onMouseEnter={updatePage}
            onMouseLeave={() => setHighlightActive(false)}
          >
            <page.icon color={theme.foreground} size={26} />
            <span>{page.name}</span>
          </MenuOptionPage>
        ) : (
          <MenuSeparator key={page.page} />
        ),
      )}
    </>
  );
};

export default memo(ListMenuItems);
