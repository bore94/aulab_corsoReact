export default function Result({ children }) {
  return (
    <div className="card bg-base-100 shadow-sm my-4 w-full max-w-xs">
      <div className="card-body text-left">{children}</div>
    </div>
  )
}
