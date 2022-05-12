import logo from './logo.svg';
import './App.css';
import {AppWrap} from "./styled";
import {AiFillGithub} from "react-icons/ai"
import {header} from "./styled"


const style = { color: "black", fontSize: "1.5em" }
function App() {
  return (
      <AppWrap>
          <div className={"holder"}>
          <div className={"space"}>
             <div className={"header"}>
              <div className={"isheader"}>
                  Header
              </div>
            </div>
          </div>
          <div className={"space"}>
             <div className={"desc"}>
              <div className={"isdesc"}>
                  Fodase
                  <br/>
                  <a className={"titulo"}>Fodase</a>
              </div>
             </div>
          </div>
          <div className={"space"}>
             <div className={"exp"}>
              <div className={"isexp"}>
                  Exp
              </div>
              <br/>
              <AiFillGithub style={style}/>
            </div>
          </div>
          <div className={"space"}>
            <div className={"git"}>
              <div className={"isgit"}>
                  Git
              </div>
              <br/>
              <AiFillGithub style={style}/>
            </div>
          </div>
          </div>


      </AppWrap>
      );
}

export default App;
