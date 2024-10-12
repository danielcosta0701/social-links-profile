import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { SocialCard } from "./components/SocialCard/SocialCard";

const SOCIAL_MOCK = {
  name: "Daniel",
  description: "Descrição",
  message: "Mensagem",
  profiles: [
    {
      id: 1,
      platform: 'GitHub',
      url: 'https://github.com/'
    },
    {
      id: 2,
      platform: 'Instagram',
      url: 'https://instagram.com/'
    },
    {
      id: 3,
      platform: 'Spotify',
      url: 'https://spotify.com'
    }
  ],
};

function App() {
  return (
    <>
      <Main>
        <SocialCard.Root>
          <SocialCard.Header>
            <SocialCard.Image />

            <SocialCard.Bio>
              <SocialCard.Name />
              <SocialCard.Description />
            </SocialCard.Bio>
          </SocialCard.Header>

          <SocialCard.Content>
            <SocialCard.List>
              <SocialCard.ListItem />
              <SocialCard.ListItem />
              <SocialCard.ListItem />
            </SocialCard.List>
          </SocialCard.Content>

          <SocialCard.Footer />
        </SocialCard.Root>
      </Main>    

      <Footer />
    </>
  )
}

export default App
