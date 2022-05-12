import styled from 'styled-components';
import bg from './bgdiv.png';
const media ={
	desktop: '@media(min-width: 1000px)'
}

export const AppWrap = styled.div`




background-color: rgb(19,14,66);
min-height: 100vh;
display: flex;
flex-flow: column nowrap;

font-size: calc(10px + 5vmin);

${media.desktop} {
padding-top: 20px;
background-color: rgb(19,14,66);
min-height: 100vh;
display: flex;
flex-flow: column nowrap;
padding-left:10vmin;
padding-right:10vmin;
font-size: calc(10px + 5vmin);
}

.titulo{
font-size: 28px;

}
.holder{

}

.header{
  background-color: rgb(85,12,136);
  color: white;
  padding-left: 1vmin;
  ${media.desktop}{

  }
}
.space{
${media.desktop}{
padding-top: 20px;
}
}
.isheader{

}
.desc{
  background-color: rgb(63,15,161);
  color: white;
  padding-left: 1vmin;
  justify-content: center;
  text-align: center;
  background-image: url(${bg});
  ${media.desktop}{
  background-image: url(${bg});
  border-radius: 20px;
  }
}
.isdesc{


}
.exp{
  background-color: rgb(222,229,241);
  color: black;
  padding-left: 1vmin;
  text-align: center;
}
.isexp{

}
.git{
  background-color: rgb(85,12,136);
  color: white;
  padding-left: 1vmin;
  text-align: center;
}
.isgit{

}


`




