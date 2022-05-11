import logo from './logo.svg';
import './App.css';
import {AppWrap} from "./styled";
import {AiFillGithub} from "react-icons/ai"
const style = { color: "white", fontSize: "1.5em" }
function App() {
  return (
      <AppWrap>
          <div>Fodase</div>
          <AiFillGithub style={style}/>
      </AppWrap>
      );
}

export default App;
