function AbilitiesCards({name}) {

    return (
        <div>
            <header>
                {/* <h3>{role}</h3> */}
                <h2>{name}</h2>
            </header>
            {/* <img src={picture} alt={name} className="ImgCharacter" />
            <div className="DivAbilities"> */}
            {/* {
                
                // eslint-disable-next-line array-callback-return
                icon.map(function(elemnt){
                    if(!(elemnt.slot === 'Passive'))
                    {
                        return (
                            <img className="ImgAbilities" src={elemnt.displayIcon} alt='' height={80} width={80} />  
                        )
                    }
                })
            } */}
            {/* </div> */}
        </div>
    )
}

export default AbilitiesCards;