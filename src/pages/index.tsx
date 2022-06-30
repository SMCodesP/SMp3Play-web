import CardSong from '@/components/CardSong';
import Menu from '@/components/Menu';
import {
  Container,
  ContainerMain,
  ListRecentPlay,
  SubTitle,
  Title,
} from '@/styles/pages/home';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [recentPlayed, setRecentPlayed] = useState<TSong[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/teste.json`);
        setRecentPlayed(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <Menu />

      <ContainerMain>
        <Title>Descobrir</Title>
        <SubTitle>Tocados recentemente</SubTitle>
        <ListRecentPlay>
          {recentPlayed.slice(0, 5).map((song) => (
            <CardSong key={song.videoId} song={song} />
          ))}
        </ListRecentPlay>
      </ContainerMain>
    </Container>
  );
}
