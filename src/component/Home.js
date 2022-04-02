import React from "react";

//Comandos
import Carousel from "react-elastic-carousel";

//Estilização
import styled from "styled-components";
import Movies from "./Movies";


export default class Home extends React.Component{
 
    render(){
        return(
            <>
            <section>
            <h2>Sessão de filmes</h2>
            
                {/* <Movies/> */}

            </section>
            <section>
            <h2>Sessão de series</h2>
            </section>
            </>
        )}
}