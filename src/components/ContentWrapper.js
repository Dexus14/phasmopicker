import { useState } from 'react';
import LeftBar from './LeftBar';
import MainBody from './MainBody';
import ghosts from '../config/ghosts.json';
import evidenceTypes from '../config/evidenceTypes.json';

const setInitialPossibleGhosts = () => {
    for (let ghost of ghosts) {
        ghost.possible = true;
    }
    return ghosts;
}

let possibleGhosts = setInitialPossibleGhosts();

const ContentWrapper = () => {

    const [currentEvidence, setCurrentEvidence] = useState([null, null, null]);
    const [possibleEvidence, setPossibleEvidence] = useState(evidenceTypes);

    const handleEviUpdate = (id, evidence) => {
        let newCurrentEvidence = currentEvidence;
        newCurrentEvidence[id] = evidence;
        setCurrentEvidence(newCurrentEvidence);
        possibleGhosts = calculatePossibleGhosts();
        setPossibleEvidence(getPossibleEvidence());
        console.log(currentEvidence);
    };

    const calculatePossibleGhosts = () => {
        let result = [];

        for (let ghost of ghosts) {
            ghost.possible = checkEvidenceMatch(ghost);
            result.push(ghost);
        }

        return result;
    }

    const checkEvidenceMatch = (ghost) => {
        let ghostPossible = true;
        for (const evidence of currentEvidence) {
            if (evidence) {
                if (!ghostPossible) break;

                if (!ghost.evidence.find(ghostEvidence => ghostEvidence === evidence)) 
                    ghostPossible = false;
            }
        }

        return ghostPossible;
    }

    const getPossibleEvidence = () => {
        let result = [];
        for (const ghost of possibleGhosts) {
            if (ghost.possible === true) {
                for (const evidence of ghost.evidence) {
                    if (!result.find(element => element === evidence))
                        result.push(evidence); 
                }
            }
        }

        for (const evidence of currentEvidence) {
            result = result.filter(element => element !== evidence)
        }

        return result;
    }



    return (
        <div id="content">
            <LeftBar handleEviUpdate={ handleEviUpdate } />
            <MainBody possibleGhosts={ possibleGhosts} possibleEvidence={ possibleEvidence } currentEvidence={ currentEvidence }/>
        </div>
    );
}

export default ContentWrapper;