import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
    <div id='container'>
        <header>
            <Link className="pagetitle" to="/">
                <h1>Matprat</h1>
            </Link>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
        </footer>
    </div>
    )
}