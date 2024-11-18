import Question from "./components/Question";
import Timetable from "./components/Timetable";
import Intro from "./components/Reserve";
import Background from "./components/Intro";

function App() {
  return (
    <>
      <Intro />
      <Background />
      <Timetable />
      <Question />
    </>
  );
}

export default App;
