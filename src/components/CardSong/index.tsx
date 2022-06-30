import Image from 'next/image';
import React from 'react';
import { Container, SongAuthor, SongTitle, Thumbnail } from './styles';

const CardSong: React.FC<{
  song: TSong;
}> = ({ song }) => {
  return (
    <Container>
      <Thumbnail>
        <Image src={song.thumbnail} layout="fill" alt={song.title} />
      </Thumbnail>
      <SongTitle>{song.title}</SongTitle>
      <SongAuthor>{song.creator.author}</SongAuthor>
    </Container>
  );
};

export default CardSong;
