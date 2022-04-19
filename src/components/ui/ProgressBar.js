export const ProgressBar = ({percentage, color, children}) => {
    return (
        <div className="containerBar">
            <span>{children}</span>
            <span>{percentage}</span>
            <div className="borderBar" style={{borderWidth:'2px', borderStyle:'solid', borderColor: color}}>
                <div className="contentBar" style={{backgroundColor: color, width: percentage}}>
                </div>
            </div>
        </div>
    );
}