import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { SocialProfile } from "./components/SocialProfile/SocialProfile"

function App() {
  return (
    <>
      <Main>
        <SocialProfile.Root>
          <SocialProfile.Header>
            <SocialProfile.Image />

            <SocialProfile.Bio>
              <SocialProfile.Name />
              <SocialProfile.Description />
            </SocialProfile.Bio>
          </SocialProfile.Header>

          <SocialProfile.Content>
            <SocialProfile.List>
              <SocialProfile.ListItem />
              <SocialProfile.ListItem />
              <SocialProfile.ListItem />
            </SocialProfile.List>
          </SocialProfile.Content>

          <SocialProfile.Footer />
        </SocialProfile.Root>
      </Main>    

      <Footer />
    </>
  )
}

export default App
