import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Answers from './components/Answers/Answers';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
    <Blogs></Blogs>
    <Answers></Answers>
    </div>
  )
}

export default App;
