import { Container, Header, SkillsList, Projects } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="App-Container">
      <Container>
        <Header />
        <SkillsList />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
