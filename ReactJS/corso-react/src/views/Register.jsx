import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'

export default function Register() {
  const { register: registerUser } = useContext(UserContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    registerUser({ name: data.name, email: data.email, password: data.password })
    navigate('/')
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <h1 className="card-title justify-center">Registration page</h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                id="register-name"
                className="input input-bordered w-full"
                placeholder="Name"
                {...register('name', {
                  required: 'This field is required',
                  maxLength: {
                    value: 50,
                    message: 'Maximum 50 characters allowed',
                  },
                })}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                id="register-email"
                className="input input-bordered w-full"
                placeholder="Email"
                {...register('email', {
                  required: 'This field is required',
                  maxLength: {
                    value: 50,
                    message: 'Maximum 50 characters allowed',
                  },
                })}
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                id="register-password"
                className="input input-bordered w-full"
                placeholder="Password"
                {...register('password', {
                  required: 'This field is required',
                  maxLength: {
                    value: 50,
                    message: 'Maximum 50 characters allowed',
                  },
                })}
              />
              {errors.password && (
                <p className="text-error text-sm mt-1">{errors.password.message}</p>
              )}
            </fieldset>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
