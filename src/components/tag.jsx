function Tags (props){

    return(
        <div className="ctn-tag">
            <div className="tag">
                  {props.tags.map((p, i) => (
                    <p alt={p} key={i}>
                      {p}
                    </p>
                  ))}
             </div>
        </div>
    );
}

export default Tags;