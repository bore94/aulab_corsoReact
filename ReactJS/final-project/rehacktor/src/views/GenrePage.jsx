import { useLoaderData, useParams } from "react-router"
import GameList from "../components/HomeComponents/Gamelist";

export default function GenrePage(){
    const games = useLoaderData();
    const { genre } = useParams();

    return (
        <>
            <h1 className="text-center text-3xl mt-10">Genre: {genre}</h1>
            <GameList>
                {games.map((game)=>{
                    return (
                        <GameList.Card key={game.id} game={game}/>
                    )
                })}
            </GameList>
        </>
    )
}
