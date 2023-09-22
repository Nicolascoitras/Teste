import { NavLink } from "react-router-dom";
import styled from "styled-components";
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    img{
    width: 10rem;
    height: 10rem;}
`
export function NotFound() {
    return (
        <>
            <CardContainer>
            <h1>Oops... Página não encontrada</h1>
            <NavLink to="/"><img src="https://www.wisc-online.com/assetrepository/getfile?id=1415&getType=view&width=0&height=0" alt="" /></NavLink>
            </CardContainer>
        </>
    )
}