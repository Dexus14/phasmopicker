import ChooseEvidence from './ChooseEvidence';

const LeftBar = ({ handleEviUpdate }) => {
    return (
        <div className="left-bar">
            <div className="left-bar-title-wrapper">
                <h1>Phasmopicker</h1>
                <h2>Choose evidence</h2>
            </div>
            <ChooseEvidence eviId="0" handleEviUpdate={ handleEviUpdate } />
            <ChooseEvidence eviId="1" handleEviUpdate={ handleEviUpdate } />
            <ChooseEvidence eviId="2" handleEviUpdate={ handleEviUpdate } />
        </div>
    );
}

export default LeftBar;