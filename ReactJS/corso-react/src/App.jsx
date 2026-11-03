import Counter from './components/Counter.jsx'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import List from './components/List.jsx'
import Navbar from './components/Navbar.jsx'

const names = ['Marco', 'Giulia', 'Andrea']

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <label className="label" htmlFor="name"> Name </label>
      <input type="text" className="field" id="name" />
      <List names={names} />
      <Counter />
      <Form />
    </>
  )
}

export default App
