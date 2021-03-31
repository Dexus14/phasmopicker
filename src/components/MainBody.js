import PossibleEvidenceBar from "./PossibleEvidenceBar";
import Table from './Table';

const MainBody = ({ possibleGhosts, possibleEvidence, currentEvidence }) => {
    
    console.log(possibleEvidence);

    return (
        <div id="main-body" class="main-body">
            <h1>Possible ghosts</h1>
            {/* <PossibleEvidenceBar possibleEvidence={ possibleEvidence } /> */}
            <Table possibleGhosts={ possibleGhosts } currentEvidence={ currentEvidence } />
        </div>
    );
}

export default MainBody;