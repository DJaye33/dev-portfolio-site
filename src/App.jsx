import { Container, Header, SkillsList } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="App-Container">
      <Container>
        <Header />
        <SkillsList />
      </Container>
    </div>
  );
}

export default App;
