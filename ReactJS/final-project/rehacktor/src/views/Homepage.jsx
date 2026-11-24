import { useLoaderData } from "react-router"
import GameList from "../components/HomeComponents/Gamelist";

export default function Homepage(){
    const games = useLoaderData();
    return (
        <>
            <h1 className="font-electro text-3xl text-center font-bold">Reactor</h1>
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
