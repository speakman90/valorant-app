import logo from '../../assets/logo/valorant-logo-0.png'
import styled from 'styled-components';
import colors from '../../utils/style/colors'

const BNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.background};
`

const LogoImg = styled.img`
    width: 10%;
`

function Header() {

    return (
        <div>
            <BNav>
                <LogoImg src={logo} alt='Logo valorant'/>
            </BNav>
        </div>
    )

}

export default Header;