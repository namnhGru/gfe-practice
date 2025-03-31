export default function Modal({children, center}) {
    const position = center 
                        ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
                        : "fixed inset-x-0 bottom-0"
    const backdrop = center
                        ? "bg-black/50"
                        : ""
    return (
        <div className={`fixed inset-0 ${backdrop}`}>
            <dialog open className={`bg-white ${position}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </dialog>
        </div>
    )
}