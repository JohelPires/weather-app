import { useState } from 'react'
import './App.css'
import Tempo from './Tempo'

// case 'drizzle':
//   addIcon(desc)
//   break;
// case 'clouds':
//   addIcon(desc)
//   break;
// case 'rain':
//   addIcon(desc)
//   break;
// case 'snow':
//   addIcon(desc)
//   break;
// case 'clear':
//   addIcon(desc)
//   break;
// case 'thunderstom':
//   addIcon(desc)
//   break;
// default:

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <Tempo setLoaded={setLoaded} />
    </div>
  )
}

export default App
