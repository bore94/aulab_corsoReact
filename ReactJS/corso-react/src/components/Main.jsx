import List from './List.jsx'
import Form from './Form.jsx'

export default function Main({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

Main.List = List
Main.Form = Form
