import { useState } from "react"
import { Link } from "react-router-dom"

function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return(
        <header>
                <div className="hidden md:flex justify-start gap-5 p-2 bg-[#3D3434] text-white">
                    <span className="hover:text-orange-800"><Link to={"/"}>KLAUS BURGERS</Link></span>
                    <span>О нас</span>
                    <span>Карьера</span>
                    <span>Контакты</span>
                    <span>Меню</span>
                    <span>Рестораны</span>
                </div>
                
                <div className="flex md:hidden justify-between bg-[#3D3434] text-white">
                    <span className="hover:text-orange-800"><Link to={"/"}><i>KLAUS BURGERS</i></Link></span>
                    <button onClick={() => {setIsOpen(!isOpen)}} className="mr-2">{isOpen ? "✕" : "☰"}</button>
                </div>

                <nav className={`absolute top-7 right-0 z-40 bg-amber-700 overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-96 w-64 opacity-100" : "max-h-0 w-0 opacity-0"}`}>
                    <span className="block py-2 px-4 border-b border-yellow-600">О нас</span>
                    <span className="block py-2 px-4 border-b border-yellow-600">Карьера</span>
                    <span className="block py-2 px-4 border-b border-yellow-600">Контакты</span>
                    <span className="block py-2 px-4 border-b border-yellow-600">Меню</span>
                    <span className="block py-2 px-4">Рестораны</span>
                </nav>
        </header>
    )
}
export default Header