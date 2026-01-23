import './App.css';
import userData from './user.json';
import UserComponent from './user';
import UseState1 from './useStates/useState-1';
import UseState2 from './useStates/UseState-2';
import UseState3 from './useStates/UseState-3';
import UseState4 from './useStates/UseState-4';
import UseState5 from './useStates/UseState-5';
import UseState6 from './useStates/UseState-6';
import UseState7 from './useStates/UseState-7';
import UseState8 from './useStates/UseState-8';

export default function App() {
  console.log('App Component Rendered');

  return (
    <>
      <UserComponent userData={userData} />
      <hr />
      <UseState1 />
      <hr />
      <UseState2 />
      <hr />
      <UseState3 />
      <hr />
      <UseState4 />
      <hr />
      <UseState5 />
      <hr />
      <UseState6 />
      <hr />
      <UseState7 />
      <hr />
      <UseState7 />
    </>
  );
}
