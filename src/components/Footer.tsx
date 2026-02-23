function Footer(){
    return(
        <footer>
            <div className="hidden bg-black text-white md:flex flex-col items-center">
                <h3 className="font-bold text-xl">Наши контакты</h3>
                <ul className="flex gap-[50px] list-disc">
                    <li><a href="https://www.youtube.com/@clayes7780" target="_blank">Ютуб</a></li>
                    <li><p>Телефон: 87718632280</p></li>
                    <li><p>Почта: daniyal.dauletulty@gmail.com</p></li>
                </ul>
                <p>&copy; 2026 KlausBurgers</p>
            </div>

            <div className="flex md:hidden flex-col bg-black text-white items-center mt-2">
                <h3 className="font-bold text-lg">Наши контакты</h3>
                <ul className="flex flex-col list-disc">
                    <li><a href="https://www.youtube.com/@clayes7780" target="_blank">Ютуб</a></li>
                    <li><p>Телефон: 87718632280</p></li>
                    <li><p>Почта: daniyal.dauletulty@gmail.com</p></li>
                </ul>
                <p>&copy; 2026 KlausBurgers</p>
            </div>
        </footer>
    )
}

export default Footer