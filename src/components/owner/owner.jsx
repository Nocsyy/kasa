import "./owner.css"
function Owner(props){
    return(
        <div className="bailleur">
                {props.host ? (
                  <p>{props.host.name}</p>
                ) : (
                  <p>No host information available</p>
                )}
                {props.host ? (
                  <img
                    alt={props.host.name}
                    src={props.host.picture}
                  ></img>
                ) : (
                  <p>No host information available</p>
                )}
              </div>
    )
}

export default Owner;