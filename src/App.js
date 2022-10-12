import ListCourse from './components/ListCourse';

function App() {
  const myCourseList = [{
    id: 1,
    code: "FOPCS",
    name: "Fundamental of Programming in C Sharp",
    description: "FOPCS description"
  }, {
    id: 2,
    code: "OOPCS",
    name: "Object Oriented Programming",
    description: "OOPCS description"
  }];

  return (
    <div>
      <h2>My course list</h2>
      <ListCourse myCourseList={myCourseList} />
    </div>
  );
}

export default App;
