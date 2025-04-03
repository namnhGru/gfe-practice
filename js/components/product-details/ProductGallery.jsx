import { useContext, useState } from "react";
import { ProductDetailsContext } from "./ProductDetails";

export default function Gallery() {
    const { image_url, heroImage, setHeroImage } = useContext(ProductDetailsContext)
    
    const widthCal = image_url.length <= 3 
                        ? `grow`
                        : `w-[26.8%]`

    const imageGalery = image_url.map((image, index) => {        
        return <div
                    key={index}
                    className={`${widthCal} h-full shrink-0 cursor-pointer rounded-[0.5em] overflow-hidden hover:opacity-80`}
                    onClick={() => setHeroImage(image)}
                >
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
    })

    return (
        <div className="galery-section flex flex-col w-[100%] gap-[1.5em]">
            <img className="w-[100%] h-[25em] rounded-[0.5em] object-cover" src={heroImage}/>
            <div className="flex flex-row flex-nowrap h-[7.5em] overflow-auto gap-[1em]">
                {imageGalery}
            </div>
        </div>
    )
}