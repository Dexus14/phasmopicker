import { useState } from 'react';
import evidenceTypes from '../config/evidenceTypes.json';
import useFitText from 'use-fit-text';
let arrayIndex = [-1, -1, -1];

const ChooseEvidence = ({eviId, handleEviUpdate}) => {

    const blankName = 'Evidence ' + (+eviId + 1);
    const [eviName, setEviName] = useState(blankName);
    const { fontSize, ref } = useFitText();
    
    const handleLeftArrow = () => {

        subtractIndex(eviId);
        
        if (arrayIndex[eviId] === -1) {
            handleEviUpdate(eviId, null);
            setEviName(blankName);
        } else {
            handleEviUpdate(eviId, evidenceTypes[arrayIndex[eviId]]);
            setEviName(evidenceTypes[arrayIndex[eviId]]);
        }

    }

    const handleRightArrow = () => {

        increaseIndex();
        
        if (arrayIndex[eviId] === -1) {
            handleEviUpdate(eviId, null);
            setEviName(blankName);
        } else {
            handleEviUpdate(eviId, evidenceTypes[arrayIndex[eviId]]);
            setEviName(evidenceTypes[arrayIndex[eviId]]);
        }
    }

    const subtractIndex = () => {
        if (arrayIndex[eviId] > 0) {
            arrayIndex[eviId] -= 1;
        } else if (arrayIndex[eviId] === 0) {
            arrayIndex[eviId] = -1;

        } else {
            arrayIndex[eviId] = evidenceTypes.length - 1;
        }

        if (indexAlreadySet()) {
            subtractIndex();
        }
    }

    const increaseIndex = () => {
        if (arrayIndex[eviId] >= -1 && arrayIndex[eviId] < evidenceTypes.length - 1) {
            arrayIndex[eviId]++;
        } else {
            arrayIndex[eviId] = -1;
        }

        if (indexAlreadySet()) {
            increaseIndex();
        }
    }

    const indexAlreadySet = () => {

        for (const index in arrayIndex) {
            if (index !== eviId && arrayIndex[index] === arrayIndex[eviId] && arrayIndex[index] !== -1) return true;
        }

        return false;
    }

    return (
        <div className="evidence-wrapper">
            <button className="arrow" onClick={ () => handleLeftArrow() }>❮</button>
            <div className="evidence-name" ref={ ref } style={{ fontSize }}>{ eviName }</div>
            <button className="arrow" onClick={ () => handleRightArrow() }>❯</button>
        </div>
    );
}

export default ChooseEvidence;