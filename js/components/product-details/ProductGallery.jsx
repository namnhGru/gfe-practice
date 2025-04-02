import { useState } from "react";
import productImages from "../../../data/product-details/product-images.json"

export default function Gallery({ product_id }) {
    const considerImages = productImages.filter(image => image.product_id === product_id)
    const [heroImage, setHeroImage] = useState(considerImages[0])
    const widthCal = considerImages.length <= 3 
                        ? `grow`
                        : `w-[5em]`

    const imageGalery = considerImages.map((image, index) => {        
        return <img key={index} className={`${widthCal} h-[100%] basis-0 rounded-[0.5em] object-cover`} 
                    src={image.image_url} alt=""
                    onClick={() => setHeroImage(considerImages[index])} />
    })

    return (
        <div className="galery-section flex flex-col w-[100%] gap-[1.5em]">
            <img className="w-[100%] h-[25em] rounded-[0.5em] object-cover" src={heroImage.image_url}/>
            <div className="flex flex-row flex-nowrap h-[7.5em] overflow-auto gap-[1em]">
                {imageGalery}
            </div>
        </div>
    )
}