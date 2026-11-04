export default function Login() {
  return (
    <div className="auth-page">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="login-email" className="label">
            Email
          </label>
          <input type="email" name="email" id="login-email" className="field"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="login-password" className="label">
            Password
          </label>
          <input
            type="password" name="password" id="login-password" className="field"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
