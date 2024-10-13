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
}

export const SOCIAL_MOCK: SocialMockData = {
    name: "Daniel Costa",
    description: "UI Designer & Front-end Developer",
    image: "src/assets/daniel.png",
    message: "(ツ)",
    profiles: [
      {
        id: 1,
        platformId: 1,
        platformName: 'GitHub',
        url: 'https://github.com/danielcosta0701',
      },
      {
        id: 2,
        platformId: 2,
        platformName: 'LinkedIn',
        url: 'https://linkedin.com/'
      },
      {
        id: 3,
        platformId: 3,
        platformName: 'Spotify',
        url: 'https://spotify.com'
      },
    ],
};
