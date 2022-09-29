import './App.css'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Images from './components/ImagesDiv/Images'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <div className="App">
      <Header/>
      <Gallery/>
      <Testimonial/>
      <Images/>
  
    </div>
  )
}

export default App
