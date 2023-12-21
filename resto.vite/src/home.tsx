import './App.css'
import Header from './components/navbar'
import Space_one from './components/space1'
import Mexican_burger from './components/mexican_burger'
import LittlePizza from './components/little_pizza'
import Space_due from './components/space2'

function landingPage() {

  return ( 
    <div> 
      <Header /> 
        <Space_one />
        <Mexican_burger />
        <LittlePizza />
        <Space_due />
    </div>
   
  )

    }

export default landingPage
