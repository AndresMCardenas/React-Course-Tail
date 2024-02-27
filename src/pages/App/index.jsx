import { BrowserRouter } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Routes from '../../Routes'
import Layout from '../../Components/Layout'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
    </BrowserRouter>
  )   
}

export default App
