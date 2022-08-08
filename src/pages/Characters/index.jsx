import { useEffect, useState } from 'react';
import AbilitiesCards from '../../components/AbilitiesCards';
import Cards from '../../components/Cards';

var _ = require('lodash')

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

       var radiantId = null

       function SetRadiant(RadiantData) {
          radiantId = RadiantData.uuid
       }

       console.log(RadiantData)

    return (
      <div>
        <div className="DivSupremeContainer">
            <div className="DivContainerCharacter">
              <h1 className="H1Style">AGENTS</h1>
              <div className="DivContainer">
                  {
                      Array.from(RadiantData).map((value, index) => (
                          <Cards data={value} SetRad={SetRadiant}/>
                      ))
                  }
              </div>
            </div>
        </div>
      </div>
    )

}

export default Characters;