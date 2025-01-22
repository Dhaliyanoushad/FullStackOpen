const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Parts = (props) => {
  return (
    <p>
      {props.part} {props.ex}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Parts part={props.part[0].name} ex={props.part[0].exercises} />
      <Parts part={props.part[1].name} ex={props.part[1].exercises} />
      <Parts part={props.part[2].name} ex={props.part[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return `Number of exercises ${
    props.part[0].exercises + props.part[1].exercises + props.part[2].exercises
  }`;
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </>
  );
};

export default App;
