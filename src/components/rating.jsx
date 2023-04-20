function Rating(props){
    return(
        <div className="ctn-star">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              color: i < Math.floor(props.rating) ? "red" : "gray",
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
    )
}

export default Rating;