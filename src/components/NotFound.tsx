import { Link } from "react-router-dom"

function NotFound() {
    return(
        <div>
            <h1>404</h1>
            <h2>Такой страницы не существует</h2>
            <Link to={"/"}><button style={{marginTop:"20px"}}>Вернуться на главное</button></Link>
        </div>
    )
}

export default NotFound