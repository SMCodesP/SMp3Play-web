interface TSong {
  ago: string;
  authorId: string;
  description: string;
  is_liked: boolean;
  thumbnail: string;
  thumbnailData: {
    width: number;
    height: number;
  };
  timestamp: string;
  title: string;
  url: string;
  videoId: string;
  views: number;
  creator: TCreator;
}
