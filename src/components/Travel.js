import React from "react"

const Travel = props => (
    <figure>
      <img src={props.photo} />
      <figcaption>
        <blockquote>{props.country}</blockquote>
        <blockquote>{props.destination}</blockquote>
        <cite>{props.distance}</cite>
      </figcaption>
    </figure>
  );
  
  export default Travel;
  

// const Travel = () => {
//     return (<>

//         <div>Destination</div>
//         <br />
//         <div>{destination}</div>
//         <div>
//             <br/>
//         <div>
//             {country}
//         </div>
//         <img src={photo} alt="star wars"/>
//         </div>
//         <div>
//             <p>Distance: {distance} de la planète Terre</p>
//         </div>
//         <br/>
//         <br/>
//         <hr/>
//         </>
//     )
// }
