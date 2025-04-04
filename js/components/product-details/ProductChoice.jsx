import { desaturateColor } from "../../helpers/products-helper"
import checkFill from "../../../img/product-details/check-fill.svg"
import minus from "../../../img/product-details/minus.svg"
import plus from "../../../img/product-details/plus.svg"
import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails"

export default function ProductChoice () {
    const { userChoice, color, size, inventory, handleColorChange, handleSizeChange, handleQuantityChange } = useContext(ProductDetailsContext)
    const quantity = userChoice.quantity < 10 ? `0${userChoice.quantity}` : userChoice.quantity

    return (
        <div className="options-section">
            <label className="font-normal text-[0.875rem]/[1.25rem] text-[#737373] block">
                Available Colors
            </label>
            <div className="flex flex-wrap gap-[1em] mt-[1rem] mb-[2rem] ">
                {
                    color.map((c, idx) => {
                        return <div key={idx} className="flex items-center justify-center w-[57px] h-[57px]">
                                    <input type="radio" name="color" className="sr-only peer"  />
                                    <div 
                                        className={`w-[38px] h-[38px] rounded-[19px] flex items-center justify-center border-solid border-[#a3a3a3] border-[1px]
                                                    hover:border-2 hover:border-black ${inventory[c].null && "pointer-events-none cursor-not-allowed opacity-20"}`} 

                                        style={{backgroundColor: desaturateColor(c, 0.8)}}
                                        onClick={e => {
                                            e.preventDefault()
                                            !inventory[c].null && handleColorChange(c)
                                        }}
                                        >
                                        {!inventory[c].null && c === userChoice.color && <img src={checkFill} alt="" />}
                                        {inventory[c].null && <div className="absolute w-[2px] h-[38px] bg-gray-600 rotate-45"></div>}
                                    </div>
                                </div>
                    })
                }
            </div>
            {
                size[0] && <>
                    <label className="font-normal text-[0.875rem]/[1.25rem] text-[#737373] block">
                        Available Sizes
                    </label>
                    <div className="flex flex-wrap gap-[1em] mt-[1rem] mb-[2rem] ">
                        { 
                            size.map((s, idx) => {
                                return <button key={idx} 
                                    className={`w-[64px] h-[48px] rounded-[4px] flex items-center justify-center border-solid border-[#e5e5e5] border-[1px]
                                                hover:border-2 hover:border-black ${s === userChoice.size && 'border-indigo-700'}`}
                                    onClick={e => {
                                        e.preventDefault()
                                        handleSizeChange(s)
                                    }}>
                                    {s}
                                </button>
                            })
                        }
                    </div>
                </>
            }
            <div>
                <label className="font-normal text-[0.875rem]/[1.25rem] text-[#737373] mb-[1rem] block">Quantity</label>
                <div className="flex gap-[0.75rem] items-center p-[0.125rem] border-[1px] border-solid w-fit rounded-[0.375rem] border-[#e5e5e5]">
                    <button className="px-[0.375rem]"
                        onClick={(e) => {
                            e.preventDefault()   
                            handleQuantityChange(true)
                        }}
                        ><img src={minus} alt="" /></button>
                    <div className="py-[0.375rem] px-[1rem] my-[0.125rem]">{quantity}</div>
                    <button className="px-[0.375rem]"
                        onClick={(e) => {
                            e.preventDefault()
                            handleQuantityChange()
                        }}
                    ><img src={plus} alt="" /></button>
                </div>
            </div>
            <button className="flex justify-center items-center gap-1.5 w-full bg-indigo-700 px-5 py-3 rounded text-white mt-[2rem]">Add to Cart</button>
        </div>
    )
}