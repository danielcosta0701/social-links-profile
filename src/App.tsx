import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { SocialCard } from "./components/SocialCard/SocialCard";
import { SOCIAL_MOCK } from "./mocks/social_mock";

function App() {
  const { 
    name, 
    description,
    image,
    message,
    profiles,
  } = SOCIAL_MOCK;

  return (
    <>
      <Main>
        <SocialCard.Root>
          <SocialCard.Header>
            <SocialCard.Image src={image} />

            <SocialCard.Bio>
              <SocialCard.Name name={name}/>
              <SocialCard.Description description={description} />
            </SocialCard.Bio>
          </SocialCard.Header>

          <SocialCard.Content>
            <SocialCard.List>
              {profiles.map(item => (
                <SocialCard.ListItem
                  key={item.id}
                  href={item.url}
                  title={item.platformName}
                  platform={item.platformId}
                />
              ))}
            </SocialCard.List>
          </SocialCard.Content>

          <SocialCard.Footer>
            <SocialCard.Text text={message} />
          </SocialCard.Footer>
        </SocialCard.Root>
      </Main>

      <Footer />
    </>
  )
}

export default App
