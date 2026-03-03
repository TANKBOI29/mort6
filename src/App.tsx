import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
