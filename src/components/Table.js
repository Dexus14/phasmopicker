

const Table = ({ possibleGhosts, currentEvidence }) => {

    const content = [];

    for (const ghost of possibleGhosts) {
        let possibilityClass = '';
        let makeEvidenceGreen = ['', '', ''];

        if (!ghost.possible) 
            possibilityClass = 'table-evidence-gray';
        else {
            possibilityClass = [];
            for (const evidence of currentEvidence) {
                ghost.evidence.find((element, index) => {
                    if (element === evidence)
                        makeEvidenceGreen[index] = 'table-evidence-green';
                    return;
                });
                    
            }
        }

        const htmlToAdd = (
            <tr>
                <td className={ possibilityClass }>{ ghost.name }</td>
                <td>
                    <p className={`table-evidence ${ possibilityClass } ${ makeEvidenceGreen[0] }`}>{ ghost.evidence[0] }</p>
                    <p className={`table-evidence ${ possibilityClass } ${ makeEvidenceGreen[1] }`}>{ ghost.evidence[1] }</p> 
                    <p className={`table-evidence ${ possibilityClass } ${ makeEvidenceGreen[2] }`}>{ ghost.evidence[2] }</p>
                </td>
                <td className={ possibilityClass }>{ ghost.strength }</td>
                <td className={ possibilityClass }>{ ghost.weakness }</td>
            </tr>
        );

        if (ghost.possible)
            content.unshift(htmlToAdd);
        else
            content.push(htmlToAdd);
    }

    return (
        <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Evidence</th>
                        <th>Strength</th>
                        <th>Weakness</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        { content }
                    </tbody>
                </table>
            </div>
    );
}

export default Table;