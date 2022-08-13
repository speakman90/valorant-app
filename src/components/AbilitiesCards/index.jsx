function AbilitiesCards({dataAbilities}) {

    return (
        <div className="ContentAbs">
            <div className="ContainerContentAbs">
                <div>
                    <h3>{dataAbilities.displayName}</h3>
                </div>
                <div className="ContentImg">
                    <p>{dataAbilities.description}</p>
                    <div className="StyleImg">
                        <img src={dataAbilities.displayIcon} alt={dataAbilities.displayName} height={80} width={80}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesCards;