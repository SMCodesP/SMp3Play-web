import { useCallback, useState } from 'react';
import ListMenuItems from './ListMenuItems';
import { Container, ListMenuOptions, Highlight } from './styles';

const Menu: React.FC = () => {
  const [width, setWidth] = useState(250);
  const [top, setTop] = useState(-1);
  const [highlightActive, setHighlightActive] = useState(false);

  const updatePage = useCallback((e) => {
    setTop((e.target as any).offsetTop);
    setHighlightActive(true);
  }, []);

  return (
    <Container
      size={{ width: width, height: `100vh` }}
      enable={{ right: true }}
      onResizeStop={(_e, _direction, _ref, d) => {
        setWidth((state) => state + d.width);
      }}
      minWidth={250}
    >
      <ListMenuOptions>
        <Highlight
          aria-hidden="true"
          style={{
            opacity: highlightActive ? 1 : 0,
            transition: top !== -1 ? `0.4s ease` : ``,
            zIndex: highlightActive ? 1 : -1,
            transform: `translateY(${top}px)`,
          }}
        />
        <ListMenuItems
          updatePage={updatePage}
          setHighlightActive={setHighlightActive}
        />
      </ListMenuOptions>
    </Container>
  );
};

export default Menu;
