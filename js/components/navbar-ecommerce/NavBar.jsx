import { useState } from "react";
import NavLinkList from "./NavLinkList";
import NavMobileMenu from "./NavMobileMenu";
import { Cart } from "../../../img/navbar-ecommerce/Cart.svg"
import { Hamburger } from "../../../img/navbar-ecommerce/Hamburger.svg"
import { stylenest } from "../../../img/navbar-ecommerce/stylenest.svg"

export default function NavBar() {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const drawIn = isShowMenu 
                        ? "translate-x-0"
                        : "translate-x-[-100%]"

    function toggleMenu() {
        setIsShowMenu(!isShowMenu)
    }

    return (
        <>
            <div className="flex items-center justify-between lg:gap-[6.4375em] lg:mt-[1em] lg:pt-[1em] lg:px-[7em] py-[1.125em] mt-[1em] px-[1em] md:px-[2em]">
                <div className="brand-section">
                    <img src={stylenest}/>
                </div>
                <div className="link-section lg:justify-start lg:grow lg:gap-[2em] hidden lg:flex">
                    <NavLinkList />
                </div>
                <div className={`cart-section flex gap-[1em] ${isShowMenu && "hidden"}`}>
                    <button>
                        <img src={Cart}/>
                    </button>
                    <button className="lg:hidden"  onClick={() => toggleMenu()}>
                        <img src={Hamburger}/>
                    </button>
                </div>
            </div>
            {isShowMenu && <div className="fixed inset-0 bg-black/50 transition-transform duration-300"></div>}
            <NavMobileMenu className={drawIn} isShowMenu={isShowMenu} onClose={toggleMenu} />
        </>
    )
}