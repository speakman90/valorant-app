import { useState } from "react";
import _ from "lodash";
import styled from 'styled-components';

function Cards({ data, SetRad}) {

    
    const [isFocus, setIsActive] = useState(false);
    const [isOpen, setOpen] = useState(false)

    const handleClick = (isOpen, isFocus) => {
        setIsActive(!isFocus);
        setOpen(!isOpen);
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

    return (
        <DivCards className="DivCards"  onClick={()=>handleClick(isOpen, isFocus)} >
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
            <div className="SupremeContainerAbs">
                <div className="ContainerAbs">
                    {
                        isOpen && SetRad(data.abilities)
                    }            
                </div>
            </div>
        </DivCards>
    )
}

export default Cards;