import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons'
import Styled from 'styled-components';
import './flip.css';

const Image = Styled.img`
    width:300px;
    height:300px;
    transition: 2s;
    transform: rotateX(${props=>props.rotateXDeg}deg) rotateY(${props=>props.rotateYDeg}deg);
`;

const Flip = ({src}) => {
    const [degX, setDegX] = React.useState(0);
    const [degY, setDegY] = React.useState(0);

    return(
        <div className="component-root">
            <FontAwesomeIcon icon={faArrowAltCircleUp} size="3x" onClick={() => {
                setDegX(prev => prev+180)
            }}/>
            <div className="inside-img">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" onClick={() => {
                    setDegY(prev=>prev-180)
                }}/>
                <Image src={src} rotateXDeg={degX} rotateYDeg={degY} />
                <FontAwesomeIcon icon={faArrowAltCircleRight} size="3x" onClick={() => {
                    setDegY(prev=>prev+180)
                }}/>
            </div>
            <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" onClick={() => {
                setDegX(prev=>prev-180)
            }}/>
        </div>
    )
}

export default Flip;