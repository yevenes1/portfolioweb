import Background from './components/background'
import {About, Footer, Header, Navbar, Projects, Skills} from './sections'

function App() {

  return (
   <>
      <Background />
    <div className="text-3xl flex-auto">
        <div>
          <Navbar/>
          <Header/>
        </div>
        <Skills/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
   </>
  )
}




export default App
