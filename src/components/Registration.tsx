import Header from "./Header.tsx"
import reg from "../assets/registration.png"
import Footer from "./Footer.tsx"
import { useState } from "react"

function Registration(){
    const [name, setName] = useState<string>("")
    const [pass, setPass] = useState<string>("") 
    return(
        <div>
            <Header/>
            <section style={{backgroundImage:`url(${reg})`}} className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <form action="" className="flex justify-center items-start text-center text-white flex-col bg-[#423939] pl-20 pr-20 pb-15 pt-10 rounded-4xl">
                    <label htmlFor="name" className="font-bold text-xl mb-2">Имя</label>
                    <input type="text" id="name" className="bg-[#D9D9D9] text-black rounded-4xl p-1 text-2xl w-[500px]" value={name} onChange={(e) => (setName(e.target.value))}/>
                    <label htmlFor="password" className="font-bold text-xl mb-2 mt-2">Пароль</label>
                    <input type="password" id="password" value={pass} className="bg-[#D9D9D9] text-black rounded-4xl p-1 text-2xl w-[500px]" onChange={(e) => (setPass(e.target.value))}/>
                    <button className="text-center bg-black mt-5 w-full rounded-4xl font-bold text-xl hover:bg-red-950 p-2 disabled:bg-gray-400" disabled={name && pass ? false : true}>Зарегестрироваться</button>
                </form>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Registration