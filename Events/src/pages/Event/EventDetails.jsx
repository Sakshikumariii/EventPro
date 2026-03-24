import {useEffect,useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import axiosApi from "../../services/api/axiosApi"
import { useTranslation } from "react-i18next"

const EventDetails = ()=>{
  const { t } = useTranslation()

const {id} = useParams()

const [event,setEvent] = useState(null)
const navigate = useNavigate();

useEffect(()=>{

axiosApi.get(`/events/${id}`)
.then(res=>setEvent(res.data))

},[])

if(!event) return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
    <p className="text-xl text-gray-600 dark:text-gray-400">{t('loading_event_details')}</p>
  </div>
)

return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="h-64 sm:h-96 w-full overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{event.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-gray-600 dark:text-gray-300">
          <div>
            <p className="font-medium text-gray-900 dark:text-white mb-2">{t('location')}</p>
            <p>{event.location}</p>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white mb-2">{t('date_time')}</p>
            <p>{event.date}</p>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white mb-2">{t('ticket_price')}</p>
            <p className="text-2xl font-semibold text-primary-600 dark:text-primary-400">
              ₹{event.price?.toLocaleString("en-IN") || event.price}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
          <button 
            onClick={() => navigate('/booking', { state: { event } })}
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            {t('book_now')}
          </button>
        </div>
      </div>
    </div>
  </div>
)
}

export default EventDetails