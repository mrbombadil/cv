export const TimeLine = (props) => {
    const {year, name, title, description} = props;
    return(
        <div className="education">
            <div>
                <time dateTime="2000-06-14">{year}</time>
                <p>{name}</p>
            </div>
            <div className="timeLine absolute"></div>
            <div>
                <h3>{title}</h3>                
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
}