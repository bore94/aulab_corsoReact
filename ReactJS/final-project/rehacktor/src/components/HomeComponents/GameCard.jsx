import { Link } from "react-router";
import routes from "../../router/routes";

export default function GameCard({game}){
    return (
        <>
            <div className="h-[200px] relative">
                <Link to={routes.detail.replace(":id", game.id)}>
                    <img src={`${game.background_image}`} className="w-full h-full brightness-50" alt="" />
                </Link>
                <p className="absolute bottom-px w-full text-center text-white">{game.name}</p>
            </div>
        </>
    )
}
