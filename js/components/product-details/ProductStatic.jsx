import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails"
import { starRating } from "../../helpers/products-helper.jsx"


export default function ProductStatic() {
    const { name, sale_price, list_price, discount_percentage, rating, description } = useContext(ProductDetailsContext)

    const reviewQuote = rating.length ? `See all ${rating.length} reviews` : `No reviews yet. Be the first`
    const averageReview = rating.length ? `${rating.reduce((a, b) => a + b, 0) / rating.length}` : 0
    const star = starRating(averageReview)


    return (
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
            <div>
                <p className="font-normal text-[1rem]/[1.5rem] text-[#525252] mb-[2rem]">{description}</p>
            </div>
        </div>
    )
}