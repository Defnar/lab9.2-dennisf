import "./App.css";
import CharacterCounter from "./CharacterCounter/CharacterCounter";

function App() {
  return (
    <>
      <CharacterCounter
        minWords={25}
        maxWords={100}
        targetReadingTime={0}
        showReadingTime={true}
      />
    </>
  );
}

export default App;
