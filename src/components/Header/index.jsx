
import styled from 'styled-components'

const HeaderContainer = styled.header`
display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${(props) => props.theme['blue-500']};
   ul {
        list-style: none;
        display: flex;
        gap: 1rem
    }
    a {
        padding: 0.5rem 1rem;
        border: 1px solid #ffffff;
        color: #;
        border-radius: 25px;
    }
      p {
        border-bottom: 1.2px solid black;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding-inline:1rem;
     }

`
const HeaderRed = styled(HeaderContainer)`
background-color: ${(props) => props.theme['blue-600']};
`

export function Header() {

    return(
        <HeaderContainer>
            <div>
            <p>EVENTOS</p>
</div>
            <nav>
                <ul>
                    <li>
                        <a>Meus eventos</a>
                    </li>
                    <li>
                        <a>Crie seu evento</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}