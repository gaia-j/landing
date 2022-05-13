import logo from './logo.svg';
import './App.css';
import {AppWrap} from "./styled";
import {SiGithub} from "react-icons/si"
import {SiGitlab} from "react-icons/si"
import {header} from "./styled"
import {SiPython} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiCplusplus} from "react-icons/si"
import {GoMail} from "react-icons/go"

function lab(){
  window.open(
    "https://gitlab.com/Gaia_/"
    )
  }
function hub(){
   window.open(
     "https://github.com/gaia-j/"
     )
  }
    

  

function App() {
  return (
      <AppWrap>
          <div className={"holder"}>
          <div className={"space"}>
             <div className={"header"}>
             <div className={"isheader"}>
                  Início
              </div>

              
            </div>
          </div>
          <div className={"space"}>
             <div className={"desc"}>
              <a className={"titulo"}>Hugo Gaia</a>
              <br/>
              <p id='ds1'>At vero eos et accusamus et iusto odio dignissimos ducimus 
              qui blanditiis praesentium voluptatum 
              deleniti atque corrupti quos dolores et 
              quas molestias excepturi sint occaecati cupiditate non 
              provident, similique sunt in culpa qui officia deserunt 
              mollitia animi, id est laborum et dolorum fuga. Et harum 
              quidem rerum facilis est et expedita distinctio.</p>
                  <br/>

             </div>
             
          </div>
          <div className={"space"}>
            <div className={"exp"}>
              <div className={"isexp"}>
              <a className={"titulo2"}>Habilidades e experiência</a>
              </div>
              <br/>
              <div className='langs'>
                  <div className='pythi'>
                    <SiPython className="python"/><br/><a id='titicon1'>Python</a><br/>
                    <div id='descicon'><a>Atualmente estudando<br/>data science em<br/>python</a></div>
                  </div>
                
                  <div className='reacti'>
                    <SiReact className="react"/><br/><a id='titicon'>GitLab</a><br/>
                    <div id='descicon2'><a id='descicon2'>Desenvolvi vários projetos<br/> pessoais e da faculdade
                    <br/> em reactJS, incluido este site.
                    </a></div>
                  </div>
                  <div className='ci'>
                    <SiCplusplus className="cplus"/><br/>
                    <a id='titicon'>GitHub</a><br/>
                    <div id='descicon3'><a id='descicon2'>Voltado para microcontroladores
                    <br/> como arduino, esp8266 e esp32.
                    </a></div>
                  </div>
              </div>


              
              
            </div>
          </div>
          <div className={"space"}>
            <div className='borom'>
              <div className={"git"}>
                <div className={"isgit"}>
                  <a className='titulo2'>Git e Contato</a>
                </div>
                <br/>
                <div className='langs'>
                  <div className='hubbi'>
                    <SiGithub onClick={hub} className="hub"/><br/><a id='titicon1'>GitHub</a><br/>
                    <a id='descicon'>gaia-j</a>
                  </div>
                
                  <div className='labbi'>
                    <SiGitlab onClick={lab} className="lab"/><br/><a id='titicon'>GitLab</a><br/>
                    <a id='descicon2'>Gaia_</a>
                  </div>
                  <div className='maili'>
                    <GoMail className="mail"/><br/><a id='titicon'>GitHub</a><br/>
                    <a id='descicon2'>contato@hugogdev.com</a>
                  </div>
                </div>
              </div>

              
              
              
              
            </div>
          </div>
          </div>


      </AppWrap>
      );
}

export default App;
