import './App.css';
import Course from './components/Course';
import ListCourse from './components/ListCourse';

function App() {
  const myCourse = {
    code: "OOP",
    name: "Object Oriented Programming",
    description: "Object Oriented Programming description"
  };

  return (
    <div>
      <ListCourse />
    </div>
  );
}

export default App;
