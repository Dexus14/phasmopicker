

const PossibleEvidenceBar = ({ possibleEvidence }) => {

    const items = [];

    for (const evidence of possibleEvidence) {
        items.push(<p id={ evidence } className="possible-evidence-icon">{ evidence }</p>)
    }

    return (
        <div id="possible-evidence">
            <h2>Possible evidence:</h2>
            { items }
        </div>
    );
}

export default PossibleEvidenceBar;