import Question from "./components/Question";
import Timetable from "./components/Timetable";
import Intro from "./components/Intro";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Intro></Intro>
      <Background />
      <Timetable />
      <Question />
    </>
  );
}

export default App;
