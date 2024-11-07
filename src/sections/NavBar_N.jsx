import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <div>
            <ul className="nav-ul">
                {navLinks.map(({id, name, href}) => (
                    <li key={id} className="nav-li">
                        <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
const NavBarN = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center p-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors" >
                        Tecnibo
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="Toggle" className="w-6 h-6" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>
            <div className={`sm:hidden nav-sidebar ${isOpen ? "max-h-screen" : "hidden"}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>

            </div>
        </header>
    )
}
export default NavBarN
