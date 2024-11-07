import {useState} from "react";

const NavBar = () => {
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
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="toggle menu">
                        <img src={isOpen === true ? "assets/close.svg" : "assets/menu.svg"} alt="Toggle" className="w-6 h-6" />
                        menu
                    </button>
                </div>

            </div>
        </header>
    )
}
export default NavBar
