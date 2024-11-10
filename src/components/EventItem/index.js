// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDeatils, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDeatils
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} className={eventImageClassName} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
