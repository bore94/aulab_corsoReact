import Items from './Items.jsx'

export default function List({ children }) {
  return <ul>{children}</ul>
}

List.Items = Items
