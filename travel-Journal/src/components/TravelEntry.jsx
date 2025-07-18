import locationMark from '../assets/locationMark.png'
export default function TravelEntry(props){
    return (
         <article className="journal-entry" >
        
            <img className="main-image" src={props.image} alt='Location image'/>
        
            <div className="content-div">
                <div className="img-country">
                    <img src={locationMark} alt='mark'/>
                    <span className="countryName">{props.country}</span>
                
                    <a href={props.googleMapLink} target='_blank'>View on google map</a>
                </div>
                <div className="div-two">
                    <h2>{props.location}</h2>
                    <p className="date">{props.date}</p>
                    <p className="text">{props.text}</p>
                </div> 
            </div>
            
        </article>


    )
}