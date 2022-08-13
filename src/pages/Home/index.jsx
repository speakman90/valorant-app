import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const H4Styled = styled.h4`
    line-height: 2em;
`

const DivText = styled.div`
    width: 50%;
    margin: 0 auto 30%;
`

const LinkStyled = styled(Link)`
    color: black;
    font-size: 2em;
    &:hover {
        color: white;
    }
`

const CharacterImg = styled.img`
    width: 75%;
    position: relative;
    z-index: 2;
`

const UlStyled = styled.ul`
    list-style: none;
    position: absolute;
    top: 10%;
    z-index: 1;
`

const LiStyled = styled.li`
color: black;
text-align: left;
font-size: 1.5em;
&:nth-child(even) {
    color: white;
    margin-left: 2.5em;
}
`

function Home() {

    const [RadiantData, setRadiantData] = useState({})
    const [error, setError] = useState(null)

    useEffect(()=>{
       async function fetchSurvey() {
        //   setDataLoading(true)
          try {
            const response = await fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=fr-FR`)
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

    var rdArray = Object.keys(RadiantData).map(function (key) {return RadiantData[key]})
    var chr =  Object.assign({},rdArray[new Date().getDay()])
    var bgColor = Object.assign({},chr['backgroundGradientColors'])

    let x = []
    for(let i = 0; i < 9; i++) {
        x.push(<LiStyled><h1>{chr.displayName}</h1></LiStyled>)   
    }

    const DivContainer = styled.div`
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        flex-direction: row;
        align-items: center;
        background: linear-gradient(#${bgColor[1]}, #${bgColor[2]}, #${bgColor[3]});
    `

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
                        {x.map(el => el)}
                    </UlStyled>
                    <CharacterImg src={chr.fullPortraitV2} alt="Personnage"/>
                </div>
            </DivContainer>

    )
}

export default Home;