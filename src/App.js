import React from "react";

//Components
import Movies from "./component/Movies";
import Series from "./component/Series";
import Home from "./component/Home";


//Comandos
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Estilizar
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  paddin:0;
  box-sizing:boder-box;
  list-style:none;
  font-family: 'Montserrat', sans-serif;
  color:#87CEFA;
  text-decoration:none;
  
}
body{
  background-color:#020426;
`
const ContainHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
border:solid  #0478A6 ;
border-radius:5px;
height:8vh;


h1{
   &:hover{
    cursor:pointer;   
    text-shadow:5px 5px 10px #03C2D8;}
    transition: text-shadow 0.5s;
}

nav{
  width:30%;
  height:8vh;
  display:flex;
  align-items:center;
  justify-content:center;
}

ul{
  display:flex;
  align-items:center;
  justify-content:center;
}
`
const Links = styled(Link)`
margin-left:1.5vw;
font-size:2vw;

&:hover{
    cursor:pointer;
    color:white;
    transition: color 0.7s; 
  }
`


export default class App extends React.Component{
  render(){
    return(
    <>
    <GlobalStyle/>
      <Router>
        <ContainHeader>
        <h1>DouglinhasPlus+</h1>
        <nav>
          <ul>
            <li>
              <Links to="/">Home</Links>
              <Links to="filmes">Filmes</Links>
              <Links to="series">Series</Links>
              
            </li>
          </ul>
        </nav>
        </ContainHeader>

        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="filmes" element={<Movies/>} />
          <Route path="series" element={<Series/>}/>
        </Routes>
      </Router>
      </>
    )
  }
}
    

// cores : #171717  #0478A6  #07C4D9  #07F2F2
// import Carousel from "react-elastic-carousel";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=6008b364d3170c211c961b52139d529c&language=en-US (Meu link)