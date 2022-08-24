import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addTickets } from '../../redux/tickets/tickets-actions'

import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import TopFilters from '../top-filters/top-filters'
import Tickets from '../tickets-list/tickets-list'
import ShowMore from '../show-more/show-more'
import Spinner from '../spinner/spinner'

import './app.css'

function App() {

  const dispatch = useDispatch()

  const [ searchId, setSearchId] = useState('')
  const [ tickets, setTickets] = useState([])
  const [ stop, setStop ] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => setSearchId(res.searchId))
      .catch(e => console.log(e.message))
  }, [])

  useEffect(() => {
    if (searchId && !stop) {
      function getTickets() {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
          .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error('Некорректный ответ от сервера, но волноваться не надо!))')
            }
          })
          .then(arr => {
            setTickets([...tickets, ...arr.tickets])
            setStop(arr.stop)
          })
          .catch((e) => {
            console.log('Error: ' + e.message)
            getTickets()
          })
      }
      getTickets()
    }
  }, [searchId, tickets, stop,])

  useEffect(() => {

    dispatch(addTickets(tickets))
    if(stop) {
      setLoad(!load)  
    }
  }, [stop, tickets])

  return (
    <div className="app">
      <Header />
      
      <main className='main'> 
        <Sidebar />       
        <div className="right-part-wrapper">
          <TopFilters />
          {load ? null : <Spinner />}
            <Tickets />
            <ShowMore />
        </div>
      </main>
    </div>
  );
}

export default App
