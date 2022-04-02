import React from "react";
import axios from "axios";

//Estilização
import styled from "styled-components";

const T1 = styled.h1`
margin-top:2vh;
`

const ListItem =styled.div` 
margin-top:3vh;
display:flex;
align-items:center;
justify-content:center;
width:80%;
height:30vh;
margin-left:3vw;
border-radius:50%;


h3{
    display:flex;
    align-items:star; 
    justify-content:center;
    width:10vw;
    height:100%;
    margin-rith:5vw;
}
img{
    width:11vw;
    &:hover{
        cursor:pointer;
        width:15vw;
        transition:width 0.5s;
    }
}

p{
    color:#87CEFA;
    margin-left:2vw;
    width:30vw;
    &:hover{
        cursor:pointer;
        width:35vw;
        transition:width 0.5s;
    }
}
`
const Intro = styled.div`
display:flex;
align-items:center;
justify-content:space-around;

input{
    width:15vw;
    height:3vh;
    border:none;
    border-radius:10px;
    color:black;
    font-size:1.5vh;
    font-weight:bold;
}
`

const Footer = styled.footer`
height:15vh;
margin-top:5vh;
border:solid #0478A6 ;
background-color:#0478A6;
background-image:URL("https://st.depositphotos.com/7668048/53198/v/450/depositphotos_531985272-stock-illustration-magic-stars-sparse-christmas-background.jpg");
background-repeat: no-repeat;
background-size:cover;
display:flex;
align-items:center; 
justify-content:space-around;

button{
    background-color:transparent;
    border-radius:5px;
    border:solid #07C4D9;
    font-size:1.5vw;
}
`


const ApiSeries = axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=6008b364d3170c211c961b52139d529c"
})

export default class Movies extends React.Component{
state = {
    listS:[],
    seriesInput:[]
}

async componentDidMount(){
   this.getSeries()
}

getSeries = async () =>{
    const Response = await ApiSeries.get()

    const TV = Response.data.results.map((item) => {
        return {
            ...item,
            poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            
        }
        
    })
    this.setState({
        listS:TV,
        seriesInput:TV
    })
}

filtrarSeies = (event) =>{
    const {listS} = this.state

    if(event.target.value === ""){
        this.setState({
            seriesInput:listS
        })
        return;
    }

    const covertSeries = listS.filter((item) => {
        if(item.title.toLowerCase().includes(event.target.value.toLowerCase)){
            return true
        }
    })
    this.setState({
        seriesInput:covertSeries
    })
}

    render(){
        let {listS} = this.state
        return(
            <>
            <Intro>
                <T1 id="voltar">Series</T1>
                <input type="text"  placeholder="Digite sua series aqui bb..." onChange={this.filtrarSeies}/>
            </Intro>
            {listS.map((item) => (
                <ListItem key={item.id}>
                    <h3>{item.name}</h3>
                    <figure>
                        <img src={item.poster_path} alt={`Banner da serie:${item.title}`} />
                    </figure>
                    <p>{item.overview}</p>
                </ListItem>
            )) }
            <Footer>
                <div>
                    <h2>Feito por Douglas de Aquino Pereira</h2>
                    <h3>Tel:4002-8922</h3>
                </div>
                <button><a href="#voltar">Voltar ao topo</a></button>
            </Footer>
            </>
        )
    }
}