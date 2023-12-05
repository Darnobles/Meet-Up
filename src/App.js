import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {

  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const updateEvents = (location, eventCount) => {
    const currentLocation = (location !== undefined) ? location: this.state.currentLocation;
    const eventNumber = (eventCount !== undefined) ? eventCount : this.state.numberOfEvent
  };

  useEffect(() => {
    fetchData();
    // This will act like componentDidMount

    return () => {

      // This will act like componentWillUnmount
      // Perform any cleanup here
    };
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
    allEvents :
    allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
      <NumberOfEvents  allLocations={allLocations} setCurrentCity={setCurrentCity} events={events}/>
      <EventList events={events} />
    </div>
  );
}

export default App;
