import { useEffect, useState } from "react";

type Company = {
    name: string;
    founders: string[];
}

interface Game{
    name: string
    company: Company
    income: number
}


type UpdateIncome = Pick<Game, 'name' | 'income'>

function GamesList(){
    const [games, setGames] = useState<Game[]>(() => { 
        const response = localStorage.getItem("games"); 
        return (response ? JSON.parse(response) : [] )
    });
    const[loading, setLoading] = useState<boolean>(true);
    const [income, setIncome] = useState<Record<string, string | null>>({});

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(games))
    }, [games])


    const isCompany = (obj:unknown): obj is Company =>{
        return(
            typeof obj === 'object' &&
            obj !== null &&
            typeof (obj as any).name === "string" &&
            Array.isArray((obj as any).founders) &&
            (obj as any).founders.every((f:unknown) => typeof f === "string")
        )
    } 

    const isGame = (obj:unknown): obj is Game => {
        return (
            typeof obj === "object" &&
            obj !== null &&
            typeof (obj as any).name === 'string' &&
            isCompany((obj as any).company) &&
            typeof (obj as any).income === "number"
        )
    }

    const isGamesArray = (obj:unknown): obj is Game[] => {
        return (
            Array.isArray(obj) &&
            (obj as any).every((f:unknown) => isGame(f))
        )
    }


    useEffect(() => {
        const fetchGames = (): Promise<Game[]> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([{name:"Cyberpunk", company: {name: "CDproject Red", founders: ["Мужик1", "Мужик2"]}, income: 1000}, {name:"CS2", company: {name:"VALVE", founders:["GABEN"]}, income:100000}])
                }, 1000)
            })
        }
        const fetchGamesFunc = async() => {
            try {
                const data = await fetchGames()
                if (isGamesArray(data)){
                    setGames((prev) => (
                        data.map(game => {
                            return {
                                ...game,
                                income: prev.find(g => g.name === game.name)?.income ?? game.income
                            }
                        })
                    ))
                } else{
                    console.log("Неверный тип")
                }
            } catch(error){
                console.error("Проблема", error)
            } finally{
                setLoading(false)
            }
        }
        fetchGamesFunc()
    }, [])


    const Update = (updates:UpdateIncome) => {
        setGames((prev) => (
            prev.map(
                (game) => (
                    game.name === updates.name ? {...game, income: updates.income} : game 
                )
            )
        ))
        setIncome((prev) => ({...prev, [updates.name]: null}))
    }

    if (loading){
        return (
            <div>
                <h1>Загрузка...</h1>
            </div>
        )
    }
    return (
        <div>
            {games.map((game) => (
                <div>
                    <h2>{game.name}</h2>
                    <p>{game.income}$</p>
                    <input type="number" value={income[game.name] ?? game.income} onChange={(e) => (setIncome((prev) => ({...prev, [game.name]: e.target.value})))}/>
                    <button onClick={() => (Update({name: game.name, income: Number(income[game.name])}))}>Изменить</button>
                </div>
            ))}
        </div>
    )
}

export default GamesList