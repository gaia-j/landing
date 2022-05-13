import styled from 'styled-components';
import bg from './img/bgdiv.gif';
import bgcode from './img/bgcode2.png';

const media ={
	desktop: '@media(min-width: 1000px)',
  desktopwide: '@media(min-width: 1400px)',
  desktopfix: '@media(min-width: 900px)',
  
  
}

export const AppWrap = styled.div`

background-color: rgb(19,14,66);
min-height: 100vh;
display: flex;
flex-flow: column nowrap;

${media.desktop} {
padding-top: 20px;
background-color: rgb(19,14,66);
min-height: 100vh;
display: flex;
flex-flow: column nowrap;
padding-left:10vmin;
padding-right:10vmin;
}

${media.desktopwide}{
  padding-left: 20%;
  padding-right: 20%;

}
#ds1{
  text-align: justify;
  text-justify: inter-word;
  font-size: calc(10px + 2vmin);
}
.titulo{
  font-size: calc(10px + 4vmin);
}
.titulo2{
  font-size: calc(10px + 3vmin);
}

.descri{
  font-size: calc(10px + 2vmin);
}
.holder{
}
.header{
  background-color: rgb(99, 10, 140);
  color: white;
  font-size: calc(8px + 2vmin);
  padding-left: 1vmin;
  display: flex;
  flex-flow: row;
  ${media.desktop}{
    border-radius: 10px;
  }
}
.space{
  padding-top:1px;
  
${media.desktop}{
padding-top: 20px;
}
}
.isheader{
  padding-bottom: 5px;
  padding-left: 40px;
  
}
.isheader2{
  text-align: right;
  padding-left: 50vmin;
  
}

.desc{

  background-color: rgb(63,15,161);
  background-size: cover;
  padding-top: 45px;
  background-position: center;
  box-shadow:inset 0 0 0 2000px rgba(101, 42, 196, 0.85);
  background-repeat: no-repeat;
  color: white;
  padding-left: 8vmin;
  padding-right: 8vmin;

  justify-content: center;
  text-align: center;
  background-image: url(${bg});
  ${media.desktop}{

  border-radius: 20px;
  }
}
.isdesc{
}
.exp{
  background-color: rgb(222,229,255);
  color: black;
  text-align: center;
  justify-content:center;
  display: flex;
  flex-flow: column nowrap;
  background-image: url(${bgcode});
  background-size: cover;
  background-position: center;
  box-shadow:inset 0 0 0 2000px rgba(222,229,255, 0.88);
  background-repeat: no-repeat;
  ${media.desktop}{
    border-radius: 20px;
    padding-left: 1vmin;
    }
}
.langs{
  text-align: center;
  justify-content:center;
  padding-bottom: 20px;
  display: flex;
  flex-flow: column;
  ${media.desktop}{
    flex-flow: row;
  }
}
.isexp{
  padding-top:10px;
}
.git{
  padding-top: 20px;
  border: solid;
  ${media.desktop}{
    border-radius: 20px;
    }
  border-width:4px;
  border-color: rgb(115,42,166);
  color: white;
  padding-left: 1vmin;
  text-align: center;
}
.isgit{

}
.borom{
  padding-bottom: 25px;
}

@media (prefers-reduced-motion: no-preference) {
  .react {
    animation: react-spin infinite 20s linear;
    fontSize: "1.5em";
    color: black;
    transition-duration: 0.5s;
    font-size: calc(60px + 5vmin);
    ${media.desktop}{
      padding-left: 0vmin;
    }
    ${media.desktopwide}{
      padding-left: 0vmin;
    }
  
  
  }
  .react:hover{
    color: #0082e9;
  }
}

@keyframes react-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.lab{
  fontSize: "1.5em";
  color: white;
  transition-duration: 0.5s;
  font-size: calc(60px + 5vmin);
  ${media.desktop}{
    padding-left: 0vmin;
  }
  ${media.desktopwide}{
    padding-left: 0vmin;
  }
  
  
}
.lab:hover{
  color: #e24329;
}
.python{
  fontSize: "1.5em";
  color: black;
  transition-duration: 0.5s;
  font-size: calc(60px + 5vmin);
  ${media.desktop}{
    padding-right: 0vmin;
    padding-left: 3vmin;
  }
  ${media.desktopwide}{
    padding-right: vmin;
  }
  

}
.python:hover{
  color: rgb(202, 164, 63);
}
.cplus{
  fontSize: "1.5em";
  color: black;
  transition-duration: 0.5s;
  font-size: calc(60px + 5vmin);
  ${media.desktop}{
    padding-left: 0vmin;
  }
  ${media.desktopwide}{
    padding-left: 0vmin;
  }
  
}
.cplus:hover{
  color: rgb(0, 88, 157);
}
.hub{
  fontSize: "1.5em";
  color: white;
  transition-duration: 0.5s;
  font-size: calc(60px + 5vmin);
  ${media.desktop}{
    padding-right: 0vmin;
    padding-left: 3vmin;
  }
  ${media.desktopwide}{
    padding-right: vmin;
  }
  

}
.hub:hover{
  color: rgb(48, 52, 67);
}
.mail{
  fontSize: "1.5em";
  color: white;
  transition-duration: 0.5s;
  font-size: calc(60px + 5vmin);
  ${media.desktop}{
    padding-left: 0vmin;
  }
  ${media.desktopwide}{
    padding-left: 0vmin;
  }
  

}
.mail:hover{
  color: rgb(0, 88, 157);
}

#titicon1{
  font-weight: bold;
  ${media.desktop}{
    padding-left: 3vmin;
  }
}
#descicon{
  ${media.desktop}{
    padding-left: 3vmin;
  }
}

#titicon{
  font-weight: bold;

}

.hubbi{
  ${media.desktop}{
    padding-right: 3vmin;
    
    }
}
.labbi{
  ${media.desktop}{
  padding-right: 12vmin;
  padding-left: 20vmin;
  }
  
}
.maili{
  ${media.desktop}{
    padding-left: 7vmin;
  }

}
.pythi{
  ${media.desktop}{
    padding-right: 4vmin;
    padding-left: 5vmin;
    }
}
.reacti{
  ${media.desktop}{
  padding-right: 8vmin;
  padding-left: 11vmin;
  }
  
}
.ci{
  ${media.desktop}{
    padding-left: 3vmin;
    padding-right: 4vmin;
  }

}

.video1{
  position: absolute;
  z-index:-1;
  top: 0;
  left:0;
}



`