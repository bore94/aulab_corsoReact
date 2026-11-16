export default function Login() {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <h1 className="card-title justify-center">Login</h1>
          <form className="flex flex-col gap-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                name="email"
                id="login-email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="password"
                id="login-password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
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
