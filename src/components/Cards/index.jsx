import _ from "lodash";

function Cards({ data, SetRad }) {

    return (
        <div className="DivCards" onClick={()=>SetRad(data.displayName)}>
            <header>
                <h3>{data.role.displayName}</h3>
                <h2>{data.displayName}</h2>
            </header>
            <img src={data.fullPortrait} alt={data.displayName} className="ImgCharacter" />
            <div className="DivAbilities">
            {
                _.map(_.filter(data.abilities, ability => ability.slot !== 'Passive'),
                    ability => <img className="ImgAbilities" src={ability.displayIcon} alt='' height={80} width={80} />
                )
            }
            </div>
        </div>
    )
}

export default Cards;