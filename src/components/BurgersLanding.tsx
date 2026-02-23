import heroImg from '../assets/hero.png';
import table from '../assets/table.png'
import { Link } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';


function BurgersLanding(){
    return(
        <div className="min-h-screen ">
            <Header/>
            
            <section className="relative h-[1024px] w-full bg-no-repeat bg-center bg-cover bg" style={{backgroundImage: `url(${heroImg})`}}>
                    <div className='flex justify-center items-center white h-screen text-white text-2xl md:text-7xl'>
                        <h1 className='font-bold text-center p-6 bg-[#5E4545] rounded-4xl '>Лучшие бургеры уже в <br />Алматы!</h1>
                    </div>
            </section>

            <div className='flex md:w-full md:min-h-[250px] flex-row' >
                <section className='bg-[#4C4141] w-1/2 text-center text-white font-bold flex flex-col'>
                    <h2 className='text-2xl md:text-4xl mb-5 mt-3'>О нас</h2>
                    <p className='text-xl md:text-2xl py-2 font-medium ml-2 mr-2 mb-2'>Профессионалы своего дела из Южной Америки. Наш бургер считается классикой в том месте. Корни уходят в 1920, в год, когда впервые был обнаружен новый способ сделать мясо вкуснее, благодаря химическим добавкам. Несмотря на это, мясо у нас все еще натуральное и оно выведено из Южных Альп, что считается качеством. Теперь мы завовываем сердца всех любителей вкусных бургеров по всему миру.</p>
                </section>

                <section className='bg-[#63402C] w-1/2 text-center text-white font-bold flex flex-col'>
                    <h2 className='text-2xl md:text-4xl mb-5 mt-3'>Наши рестораны</h2>
                    <ul className="text-xl md:text-2xl font-medium flex flex-col items-center space-y-2">
                        <li className="text-center">Ул. Розыбакиева 20А</li>
                        <li className="text-center">Жетысу 30</li>
                        <li className="text-center">Абая 225А</li>
                        <li className="text-center">Ул. Утепова 41</li>
                    </ul>
                </section>
            </div>


            <section style={{backgroundImage: `url(${table})`}} className='min-h-[300px] bg-no-repeat w-full bg-center bg-cover flex flex-col'>
                <h2 className='text-center text-white text-5xl p-4 bg-[#AF5F0E] mx-auto font-bold rounded-2xl mt-3'>Попробуй одним из <br /> первых!</h2>
                <button className='text-center text-white text-4xl p-8 bg-[#832800] mx-auto font-bold rounded-2xl mt-6 hover:bg-black transition duration-300'> <Link to={"/registration"}>Регистрация</Link></button>
            </section>

            <Footer/>
        </div>
    )
}

export default BurgersLanding