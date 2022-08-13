import logo from '../../assets/logo/valorant-logo-0.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
`

const LogoImg = styled.img`
    width: 5%;
    filter: invert(1);
`

function Header() {

    return (
        <div>
            <BNav>
            <Link to='/' style={{ 'text-align': 'center' }}>
                <LogoImg src={logo} alt='Logo valorant'/>
            </Link>
            </BNav>
        </div>
    )

}

export default Header;