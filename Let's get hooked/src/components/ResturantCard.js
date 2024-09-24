import { IMAGE_URL } from "../utils/constants"

const ResturantCard=({resData})=>{
    const {name,cuisines,cloudinaryImageId}=resData?.info
    return(
      <div className="card">
      <img className="card-logo" src={`${IMAGE_URL}/${cloudinaryImageId}`}/>
      <div>
      <h4>{name}</h4>
  </div>
      <p>{cuisines.join(", ")}</p>
      </div>
    )
  }
  export default ResturantCard