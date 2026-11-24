import { Link } from "react-router"
import routes from "../../router/routes"

export default function Sidebar({genres}){
    return (
        <>
            <nav className="h-full min-h-full bg-nav-gray">
                <ul className="px-5 py-4">
                    {genres.map((genre)=>{
                        return (
                            <li className="mb-2" key={genre.id}>
                                <Link to={routes.genre.replace(":genre", genre.slug)}>{genre.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
