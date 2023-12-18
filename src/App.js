import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';
import { InfoAlert, ErrorAlert } from './components/Alert';

const App = () => {

  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const updateEvents = async (location, eventCount) => {
    const currentLocation = (location !== undefined) ? location: currentCity;
    const eventNumber = (eventCount !== undefined) ? eventCount : currentNOE;

    const events = await getEvents();
    let locationEvents = (currentLocation === 'all') ?
        events :
        events.filter((event) => event.location === currentLocation);
    locationEvents = locationEvents.slice(0, eventNumber);

    setEvents(locationEvents);
    setCurrentNOE(eventNumber);
    setCurrentCity(currentLocation);
      
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
    allEvents.filter((event) => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length !== 0 ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
        setInfoAlert={setInfoAlert}/>
      <NumberOfEvents  
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity} 
      events={events} 
      updateEvents={updateEvents}
      setErrorAlert={setErrorAlert}/>
      <EventList events={events} />
    </div>
  );
}

export default App;