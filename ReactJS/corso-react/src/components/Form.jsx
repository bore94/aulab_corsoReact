import Input from './Input.jsx'
import Button from './Button.jsx'
import Result from './Result.jsx'

export default function Form({ children, onSubmit }) {
  return (
    <div className="card bg-base-100 shadow-sm my-6">
      <div className="card-body items-center">
        <h2 className="card-title">Form</h2>
        <form className="flex flex-col items-center gap-3 w-full" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}

Form.Input = Input
Form.Button = Button
Form.Result = Result
