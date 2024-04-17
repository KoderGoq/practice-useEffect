import UserPost from './components/UserPost ';
import WindowSize from "./components/WindowSize "
import CountdownTimer from './components/CountdownTimer '
import ValidatedInput from './components/ValidatedInput ';

function App() {

  return (
    <>
      <UserPost id={1} />
      <CountdownTimer initialTime={10}/>
      <WindowSize />
      <ValidatedInput />
    </>
  )
}

export default App
