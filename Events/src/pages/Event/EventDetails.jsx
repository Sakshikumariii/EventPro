import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import axiosApi from "../services/axiosApi"

const EventDetails = ()=>{

const {id} = useParams()

const [event,setEvent] = useState(null)

useEffect(()=>{

axiosApi.get(`/events/${id}`)
.then(res=>setEvent(res.data))

},[])

if(!event) return <p>Loading...</p>

return(

<div>

<img src={event.imageUrl} width="300"/>

<h1>{event.title}</h1>

<p>{event.location}</p>

<p>{event.date}</p>

<p>₹{event.price}</p>

<a href={`/booking/${event._id}`}>
Book Now
</a>

</div>

)
}

export default EventDetails