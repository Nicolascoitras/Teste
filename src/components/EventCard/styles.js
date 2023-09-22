import styled, { css } from 'styled-components'
export const CardContainer = styled.div`
display: flex;
flex-direction:column;
width: 20rem;
height: 20rem;
border:1px solid black;
border-radius:10px;
box-shadow: 0 0 5px gray;
background-color: ${({ dataUltrapassada}) => dataUltrapassada ? "rgb(172, 57, 57)" : 'white'};
transition: 0.2s;

${
    ({dataUltrapassada}) => dataUltrapassada && css`
    color:white;
    `
}
&:hover{
transform:scale(1.01);
}
h2{
    justify-content:center;
    display:flex;
}
p{
margin:1rem;

}
img {
    width: 100%;
    height: 50%; /* de 60% para 50% */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
button {
    background-color: rgba(255,255,255,0.9);
    border: 1px solid black;
    border-radius: 2px;
    gap:1rem;
 display:flex;
  
}
`