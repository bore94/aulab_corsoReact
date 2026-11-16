import { useForm } from 'react-hook-form'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <h1 className="card-title justify-center">Login</h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                id="login-email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
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
                id="login-password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
