import Question from "./components/Question";
import Timetable from "./components/Timetable/Timetable";
import Intro from "./components/Reserve";
import Background from "./components/Intro";
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
