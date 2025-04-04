import { createContext, useState } from "react";
import { normalizedProducts } from "../../helpers/products-helper.jsx"
import ProductGallery from "./ProductGallery";
import ProductStatic from "./ProductStatic.jsx";
import ProductChoice from "./ProductChoice.jsx";
import ProductAccordion from "./ProductAccordion.jsx";

const ProductDetailsContext = createContext(null)

export default function ProductDetails() {
    const {product_id, name, description, color, image_url, size, list_price, sale_price, discount_percentage, rating, inventory} = normalizedProducts[6]
    console.log(inventory[color[0]].null )
    
    const [userChoice, setUserChoice] = useState({ 
        color: inventory[color[0]].null ? color[0] : "", 
        size: size[0], 
        quantity: 0 
    })
    const [heroImage, setHeroImage] = useState(image_url[0])

    function handleSizeChange(size) {
        setUserChoice(prev => ({
            ...prev,
            size: size
        }))
    }
    function handleColorChange(color) {
        setUserChoice(prev => ({
            ...prev,
            color: color
        }))
    }

    function handleQuantityChange(minus=false){
        minus ? setUserChoice(prev => ({
            ...prev,
            quantity: prev.quantity <= 0 ? 0 : prev.quantity - 1
        })) : setUserChoice(prev => ({
            ...prev,
            quantity: prev.quantity >= 99 ? 99 : prev.quantity + 1
        })) 
    }

    return (
        <ProductDetailsContext.Provider value={{product_id, name, description, color, image_url, size, list_price, sale_price, discount_percentage, rating, inventory, heroImage, setHeroImage, userChoice, handleSizeChange, handleColorChange, handleQuantityChange }}>
            <div className="bg-white p-[1em] m-[1em] min-h-screen flex flex-col gap-[3em]">
                <ProductGallery />
                <ProductStatic />
                <ProductChoice />
                <ProductAccordion />
            </div>
        </ProductDetailsContext.Provider>
  ) 
}

export {ProductDetailsContext}