import Question from "./components/Question";
import Timetable from "./components/Timetable";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Location from "./components/Location";

function App() {
  return (
    <>
      <Intro />
      <Background />
      <Timetable />
      <Location />
      <Question />
    </>
  );
}

export default App;
