import React from "react"

const Travel = ({destination,country,photo,distance}) => {
    return (<>

        <div>Destination</div>
        <br />
        <div>{destination}</div>
        <div>
            <br/>
        <div>
            {country}
        </div>
        <img src={photo} alt="star wars"/>
        </div>
        <div>
            <p>Distance: {distance} de la planète Terre</p>
        </div>
        <br/>
        <br/>
        <hr/>
        </>
    )
}

export default Travel