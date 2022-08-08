import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from '../../components/Cards';

function Characters() {

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

        Array.from(RadiantData).map((value, index) => (
            console.log(value)
        ))

    return (
        <div>
          <h1 className="H1Style">AGENTS</h1>
          <div className="DivContainer">
              
              {
                  Array.from(RadiantData).map((value, index) => (
                      <Cards name={value.displayName} role={value.role['displayName']} picture={value.fullPortrait} icon={value.abilities} />
                  ))
              }
          </div>
        </div>
    )

}

export default Characters;