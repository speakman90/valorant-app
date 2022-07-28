import styled from 'styled-components';
import Raze from '../../assets/characters/raze.png';

const RazeImg = styled.img`
width: 40%;
`

const UlStyled = styled.ul`
list-style: none;
position: absolute;
top: 10%;
z-index: -1;
`
const LiStyled = styled.li`
color: black;
text-align: left;
font-size: 1.5em;
&:nth-child(even) {
    color: white;
    margin-left: 2em;
}
`

function Card({name, img}) {

    return (
        <div>
        <UlStyled>
            <LiStyled><h1>{name}</h1></LiStyled>
        </UlStyled>
        <RazeImg src={img} alt="Personnage Raze"/>
    </div>
    )
}

export default Card;