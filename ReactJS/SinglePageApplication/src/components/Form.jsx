import Input from './Input.jsx'
import Button from './Button.jsx'
import Result from './Result.jsx'

export default function Form({ children, onSubmit }) {
  return (
    <>
      <h2>Form</h2>
      <form onSubmit={onSubmit}>{children}</form>
    </>
  )
}

Form.Input = Input
Form.Button = Button
Form.Result = Result
