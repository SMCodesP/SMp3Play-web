interface TCreator {
  author: string;
  authorBanner: {
    url: string;
    width: number;
    height: number;
  };
  authorId: string;
  authorThumbnail: {
    url: string;
    width: number;
    height: number;
  };
  authorUrl: string;
  description: string;
  isVerified: boolean;
  subscriberCount: number;
}
