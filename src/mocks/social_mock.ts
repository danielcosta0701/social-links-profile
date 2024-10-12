interface SocialMockData {
  name: string;
  description: string;
  image: string;
  message: string;
  profiles: {
      id: number;
      platformId: number;
      platformName: string;
      url: string;
  }[];
};

export const SOCIAL_MOCK: SocialMockData = {
    name: "Daniel",
    description: "Front-end Developer",
    image: "",
    message: "Mensagem",
    profiles: [
      {
        id: 1,
        platformId: 1,
        platformName: 'GitHub',
        url: 'https://github.com/',
      },
      {
        id: 2,
        platformId: 2,
        platformName: 'Instagram',
        url: 'https://instagram.com/'
      },
      {
        id: 3,
        platformId: 3,
        platformName: 'Spotify',
        url: 'https://spotify.com'
      }
    ],
};
