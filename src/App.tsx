import Question from "./components/Question";
import Timetable from "./components/Timetable/Timetable";
import Intro from "./components/Intro";
import Background from "./components/Background";

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
