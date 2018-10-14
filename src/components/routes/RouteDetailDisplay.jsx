import React from 'react'
import Rating from "./Rating"

const RouteDetailDisplay = ({routes}) =>{
    return (
        <div>
            <h1>{routes.title}</h1> 
            <Rating 
        />
        </div>
    )
}

export default RouteDetailDisplay
