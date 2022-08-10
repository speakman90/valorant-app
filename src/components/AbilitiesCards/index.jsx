function AbilitiesCards({dataAbilities}) {

    return (
        <div>
            <div>
                <h3>{dataAbilities.displayName}</h3>
            </div>
            <div>
                <p>{dataAbilities.description}</p>
            </div>
            <div>
                <img src={dataAbilities.displayIcon} alt={dataAbilities.displayName} />
            </div>
        </div>
    )
}

export default AbilitiesCards;