import { useState } from "react";
import _ from "lodash";

function Cards({ data, SetRad }) {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="DivCards" onClick={()=>setOpen(!isOpen)}>
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
            {
                isOpen && SetRad(data.abilities)
            }            
        </div>
    )
}

export default Cards;