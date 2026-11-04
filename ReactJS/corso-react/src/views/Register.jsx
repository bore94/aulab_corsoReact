export default function Register() {
  return (
    <div className="auth-page">
      <h1>Registration page</h1>
      <form>
        <div>
          <label htmlFor="register-name" className="label">
            Name
          </label>
          <input type="text" name="name" id="register-name" className="field"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="register-email" className="label">
            Email
          </label>
          <input
            type="email" name="email" id="register-email" className="field"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="register-password" className="label">
            Password
          </label>
          <input
            type="password" name="password" id="register-password" className="field"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label htmlFor="register-confirm-password" className="label">
            Confirm Password
          </label>
          <input
            type="password" name="confirmPassword" id="register-confirm-password" className="field"
            placeholder="Enter your password"
          />
        </div>
        <button type="button">Register</button>
      </form>
    </div>
  )
}
