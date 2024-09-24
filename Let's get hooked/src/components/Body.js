import ResturantCard from "./ResturantCard"
import restaurantList from "../utils/mockData"
import { useState } from "react"
import reslist from '../utils/mockData'

const Body=()=>{
  // local state variable
  const [restaurantList,setRestaurantList]=useState(reslist)
    return(
      <div className="body">
        <div className="search"></div>
          <button className="filter-btn" onClick={()=>{
            const filteredList=restaurantList.filter(res=>res.info.avgRating>4.2)
            setRestaurantList(filteredList)
          }}>Top rated resturants</button>
       
        <div className="resturant-container">
          {restaurantList.map((resturant)=>(
          <ResturantCard key={resturant.info.id} resData={resturant}/>
          ))}
         
        </div>
      </div>
    )
  }

  export default Body