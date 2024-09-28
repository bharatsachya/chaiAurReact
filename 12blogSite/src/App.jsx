import './App.css'
import Conf from './conf/conf'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'

function App() {
  console.log(Conf.AppwriteBucketID)
  return (
    <>
       <div className="bg-green-500 p-2 rounded-lg">
         <Header/>
         {Outlet}
         <Footer/>
       </div>
    </>
  )
}

export default App
