import Main from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
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

  const defaultProfile = profiles[0].url;

  return (
    <>
      <Main>
        <SocialCard.Root>
          <SocialCard.Header>
            <SocialCard.Image 
              src={image} 
              alt={name}
              href={defaultProfile}
            />

            <SocialCard.Bio>
              <SocialCard.Name name={name}/>
              <SocialCard.Description description={description} />
              <SocialCard.Location location="São Paulo, SP" />
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

      <Footer.Root>
        <Footer.Copyright>
          Desenvolvido por <a href="https://github.com/danielcosta0701" target="_blank" className="font-bold">Daniel Costa</a>
        </Footer.Copyright>
      </Footer.Root>
    </>
  )
}

export default App
