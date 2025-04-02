import { createContext } from "react";
import ProductGallery from "./ProductGallery";
import checkFill from "../../../img/product-details/check-fill.svg"

import { normalizedProducts, desaturateColor, starRating } from "../../helpers/products-helper.jsx"

const ProductDetailsContext = createContext(null)

export default function ProductDetails() {
    const {product_id, name, description, color, image_url, size, list_price, sale_price, discount_percentage, rating} = normalizedProducts[2]
    console.log(normalizedProducts[6])

    const reviewQuote = rating.length ? `See all ${rating.length} reviews` : `No reviews yet. Be the first`
    const averageReview = rating.length ? `${rating.reduce((a, b) => a + b, 0) / rating.length}` : 0
    const star = starRating(averageReview)

    return (
        <div className="bg-white p-[1em] m-[1em] min-h-screen flex flex-col items-center gap-[3em]">
            <ProductGallery product_id={product_id}/>
            <div className="detail-section">
                <div className="detail-section__content">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-[1.875rem]/[2.25rem] mb-[1.25rem]">{name}</h1>
                        <div className="font-medium text-[1.875rem]/[2.25rem] text-[#525252] flex gap-[0.5rem] mb-[0.5rem]"><h1>{`$${sale_price[0]}`}</h1><span className="text-[#a3a3a3] text-[1.125rem]/[1.75rem] self-end line-through">{`$${list_price[0]}`}</span></div>
                        <div className="mb-[0.75rem] px-[10px] py-[4px] border-solid border-[#fde68a] border-[1px] rounded-[9999px] bg-[#fffbeb] w-fit
                                        font-normal text-[0.875rem]/[1.25rem] text-[#b45309]">{`${discount_percentage}% OFF`}</div>
                        <div className="flex gap-[0.5rem] items-center flex-wrap mb-[2rem]">
                            <div className="font-normal text-[1.25rem]/[1.75rem] text-[#171717]">{averageReview}</div>
                            <div className="flex gap-[0.25rem]">{star}</div>
                            <a className="font-medium text-[0.875rem]/[1.25rem] text-indigo-700">{reviewQuote}</a>
                        </div>
                    </div>
                    <div>
                        <p className="font-normal text-[1rem]/[1.5rem] text-[#525252] mb-[2rem]">{description}</p>
                    </div>
                    <form className="options-section">
                        <label className="font-normal text-[0.875rem]/[1.25rem] text-[#737373] mb-[2rem] block">
                            Available Colors
                            <div className="flex flex-wrap gap-[1em] mt-[1rem]">
                                {
                                    color.map((c, idx) => {
                                        return <div key={idx} className="flex items-center justify-center w-[57px] h-[57px]">
                                                    <input type="radio" name="color" className="sr-only peer" />
                                                    <div 
                                                        className={`w-[38px] h-[38px] rounded-[19px] flex items-center justify-center border-solid border-[#a3a3a3] border-[1px]
                                                                    hover:border-2 hover:border-black`} 
                                                        style={{backgroundColor: desaturateColor(c, 0.8)}}>
                                                        {false && <img  src={checkFill} alt="" />}
                                                    </div>
                                                </div>
                                    })
                                }
                            </div>
                        </label>
                        <label className="font-normal text-[0.875rem]/[1.25rem] text-[#737373] mb-[2rem] block">
                            Available Sizes
                            <div className="flex flex-wrap gap-[1em] mt-[1rem]">
                                { 
                                    size.map((s, idx) => {
                                        return <button key={idx} 
                                            className={`w-[64px] h-[48px] rounded-[4px] flex items-center justify-center border-solid border-[#e5e5e5] border-[1px]
                                                        hover:border-2 hover:border-black`}>
                                            {s}
                                        </button>
                                    })
                                }
                            </div>
                        </label>
                        <label>
                            Quantity
                            <input type="radio" name="quantity" />
                        </label>
                    </form>
                </div>
                <div className="detail-section__accordion">Accordion Here</div>
            </div>
        </div>
  ) 
}

export {ProductDetailsContext}