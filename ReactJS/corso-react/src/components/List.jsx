import Items from './Items.jsx'

export default function List({ children }) {
  return <ul className="menu bg-base-100 rounded-box shadow-sm w-full max-w-xs mx-auto my-4">{children}</ul>
}

List.Items = Items
