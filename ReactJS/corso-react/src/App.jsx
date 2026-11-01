import Header from './components/Header.jsx'
import List from './components/List.jsx'
import Navbar from './components/Navbar.jsx'

const names = ['Marco', 'Giulia', 'Andrea']

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <label
        className="label"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="field"
        id="name"
        type="text"
      />
      <List names={names} />
    </>
  )
}

export default App
