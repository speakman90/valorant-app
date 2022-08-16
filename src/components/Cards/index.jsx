import { useState } from "react";
import _ from "lodash";
import styled from 'styled-components';
import AbitilitiesCards from '../../components/AbilitiesCards'

function Cards({ data }) {
    
    const [isFocus, setIsActive] = useState(false);
    const [isOpen, setOpen] = useState(false);


    const handleClick = (data) => {
        var ignoreClickOnMeElement = document.getElementById(data);
        document.addEventListener('click', function(event) {
            var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
            if (!isClickInsideElement) {
                return (setOpen(false), setIsActive(false))
            }
                return (setOpen(true), setIsActive(true));
        })
    }

    const DivCards = styled.div`
    background: ${isFocus ? 'white' : '#1f2326'}
    `

    const ImgCharacter = styled.img`
    transform: ${isFocus ? 'translate(20px)' : 'translate(0px)'};
    &:hover {
        transform: ${isFocus && 'none'}!important;
    }
    `

    const H3Styles = styled.h3`
    color: ${isFocus && 'black'};
    text-shadow: ${isFocus && 'none'};
    &:hover {
        transform: ${isFocus && 'none'}!important;
    }
    `

    let radiantId = null

    function SetRadiant(data) {
        radiantId = data
        return _.map(radiantId, abs =>(
        <AbitilitiesCards dataAbilities={abs} />
        ))
    }

    return (
        <DivCards className="DivCards" id={data.uuid}  onClick={()=>handleClick(data.uuid)} >
            <header>
                <H3Styles className='H3Styles'>{data.role.displayName}</H3Styles>
                <h2 style={{ margin : '1px'}}>{data.displayName}</h2>
            </header>
            <ImgCharacter src={data.fullPortrait} alt={data.displayName} className="ImgCharacter" />
            <div className="DivAbilities">
            {
                _.map(_.filter(data.abilities, ability => ability.slot !== 'Passive'),
                    ability => <img className="ImgAbilities" src={ability.displayIcon} alt='' height={80} width={80} />
                )
            }
            </div>
            {
                isOpen && (
            <div className="SupremeContainerAbs">
                <div className="ContainerAbs" id={data.uuid}>
                    {SetRadiant(data.abilities)}         
                </div>
            </div>
                )
            }
        </DivCards>
    )
}

export default Cards;