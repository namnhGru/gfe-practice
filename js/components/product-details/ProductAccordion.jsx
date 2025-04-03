import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails"
import { productInfoFeed } from "../../helpers/products-helper.jsx"
import collapse from "../../../img/product-details/collapse.svg"

export default function ProductAccordion() {
    const { product_id } = useContext(ProductDetailsContext)
    const productInfo = productInfoFeed(product_id)
    return (
        <div className="detail-section__accordion flex flex-col justify-between">
            {
                productInfo.map((prod, idx) => {
                    return  <div key={idx} className="flex flex-row">
                                <div>
                                    <h3 className="font-medium text-neutral-900 text-[1.125rem]/[1.75rem]">{prod.title}</h3>
                                    <ul className="font-normal text-[1rem]/[1.5rem] text-neutral-600 text-[#525252] list-disc px-[1.5rem] mb-[2rem]">
                                        {prod.description.map((des, didx) => (
                                            <li key={didx}>{des}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <button className="w-[3rem]"><img src={collapse} alt="" /></button>

                                </div>
                            </div>
                })
            }
        </div>
    )
}