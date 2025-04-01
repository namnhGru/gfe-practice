export default function NavBar() {
    return (
        <>
            <div className="flex items-center justify-between gap-[6.4375em] pt-[1em] px-[7em]">
                <div className="brand-section flex ">
                    <img src="img\stylenest.svg"/>
                </div>
                <div className="link-section flex justify-start grow gap-[2em]">
                    <a href="#">Shop all</a>
                    <a href="#">Latest arrivals</a>
                </div>
                <div className="cart-section flex gap-[1em]">
                    <button>
                        <img src="img\Cart.svg"/>
                    </button>
                    <button>
                        <img src="img\Hamburger.svg"/>
                    </button>
                </div>
            </div>
        </>
    )
}