import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Cards/CardWel.jsx';

const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1em 0 0 0;
`

const H4Styled = styled.h4`
    line-height: 2em;
`

const DivText = styled.div`
    width: 50%;
    margin: 0 auto 50%;
`

const LinkStyled = styled(Link)`
    color: black;
    &:hover {
        color: white;
    }
`

const CharacterImg = styled.img`
width: 70%;
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

function Home() {

    const [RadiantData, setRadiantData] = useState({})
    const [error, setError] = useState(null)


    useEffect(()=>{
       async function fetchSurvey() {
        //   setDataLoading(true)
          try {
            const response = await fetch(`https://valorant-api.com/v1/agents`)
            const RadiantData = await response.json()
            setRadiantData(RadiantData.data)
          }
          catch(error) {
            console.log(error)
            setError(true)
          }
          finally {
            // setDataLoading(false)
          }
        }
        fetchSurvey()
      }, [])

    var day = new Date().getDay()
    var rdArray = Object.keys(RadiantData).map(function (key) {return RadiantData[key]})
    var chr =  Object.assign({},rdArray[day])

    console.log(chr)

    return (

        <DivContainer>
            <div style={{ width: '75vw' }}>
                <DivText>
                    <h1>Bienvenue !</h1>
                    <H4Styled>Ici nous listons tout les personnages Valorant existant !</H4Styled>
                    <LinkStyled to='/characters'>Voir tout les personnages</LinkStyled>
                </DivText>
            </div>
            <div>
                <UlStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                    <LiStyled><h1>{chr.displayName}</h1></LiStyled>
                </UlStyled>
                <CharacterImg src={chr.fullPortraitV2} alt="Personnage"/>
            </div>
        </DivContainer>

    )
}

export default Home;