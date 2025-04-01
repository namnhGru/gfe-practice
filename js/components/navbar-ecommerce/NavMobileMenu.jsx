import NavLinkList from "./NavLinkList";
import close from "../../../img/Close.svg"

export default function NavMobileMenu ({ className, onClose }) {
    
    return (
        <>
            <div className={`fixed inset-y-0 left-0 bg-white w-[calc(100%-1em)] pt-[2em] px-[1em] pb-[1em] gap-[1.5em] flex flex-col transition-transform duration-300 ${className}`}>
                <div className="brand-section flex justify-between items-center">
                    <img src="img\stylenest.svg"/>
                    <button onClick={() => onClose()}><img src={close}/></button>
                </div>
                <div className="flex flex-col gap-[0.5em]">
                    <NavLinkList />
                </div>
            </div>
        </>
    )
}