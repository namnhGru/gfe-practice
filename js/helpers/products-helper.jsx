import productImages from "../../data/product-details/product-images.json"
import categories from "../../data/product-details/categories.json"
import collections from "../../data/product-details/collections.json"
import inventory from "../../data/product-details/inventory.json"
import productInfo from "../../data/product-details/product-info.json"
import productReviews from "../../data/product-details/product-reviews.json"
import products from "../../data/product-details/products.json"
import users from "../../data/product-details/users.json"
import fullStar from "../../img/product-details/fullStar.svg"
import halfStar from "../../img/product-details/halfStar.svg"
import emptyStar from "../../img/product-details/emptyStar.svg"

function mappingAttributes(ogData, data, attribute, key='product_id') {
    const resultData = data.filter(rec => rec[key] === ogData[key])
    const resultAttribute = resultData.reduce((acc, rec) => {
        if (!acc.includes(rec[attribute])) {
            acc.push(rec[attribute])
        }
        return acc
    }, [])
    
    return {
        ...ogData,
        [attribute]: [...resultAttribute],
    }

}

function normalizeData(products) {
    const resultData = [...products]
                    .map(product => {
                        return mappingAttributes(product, productImages, 'image_url')
                    })
                    .map(product => {
                        return mappingAttributes(product, productImages, 'color')
                    })
                    .map(product => {
                        return mappingAttributes(product, inventory, 'size')
                    })
                    .map(product => {
                        return mappingAttributes(product, inventory, 'list_price')
                    })
                    .map(product => {
                        return mappingAttributes(product, inventory, 'discount_percentage')
                    })
                    .map(product => {
                        return mappingAttributes(product, inventory, 'sale_price')
                    })
                    .map(product => {
                        return mappingAttributes(product, productReviews, 'rating')
                    })
                    .map(product => {
                        const newInventory = inventory.filter(rec => rec['product_id'] === product['product_id'])
                        const resultInventory = newInventory.reduce((acc, rec) => {                            
                            if (!acc[`${rec.color}`]) {
                                acc[`${rec.color}`] = {}
                            }
                            if (!acc[`${rec.color}`][`${rec.size}`]) {
                                acc[`${rec.color}`][`${rec.size}`] = {}
                            }
                            acc[`${rec.color}`][`${rec.size}`] = {...rec}
                            return acc
                        }, {})
                        
                        return {
                            ...product,
                            inventory: {
                                ...resultInventory
                            }
                        }
                    })               
    return resultData
}

const normalizedProducts = normalizeData(products)

function desaturateColor(colorKeyword, desaturation = 0.4) {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = colorKeyword;
    const hex = ctx.fillStyle.startsWith('#') ? ctx.fillStyle.slice(1) : ctx.fillStyle;
  
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    // Convert RGB to HSL
    const [h, s, l] = rgbToHsl(r, g, b);
  
    // Reduce saturation
    const newS = Math.max(0, Math.min(1, s * (1 - desaturation)));
  
    // Convert back to RGB
    const [newR, newG, newB] = hslToRgb(h, newS, l);
  
    return `rgb(${newR}, ${newG}, ${newB})`;
}
  
function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if(max === min){
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h, s, l];
}
  
function hslToRgb(h, s, l){
    let r, g, b;
    if(s === 0){
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function starRating(score=3) {
    const starArray = []
    if (score === 0) {
        starArray = [emptyStar,emptyStar,emptyStar,emptyStar,emptyStar]
    } else {
        for (let i = 0; i < Math.floor(score); i++) {
            starArray.push(fullStar) 
        }
        if (score < 5) {
            score !== Math.floor(score) && starArray.push(halfStar)
            if (starArray.length < 5) {
                for (let i = 0; i < 5 - starArray.length; i++) {
                    starArray.push(emptyStar) 
                }
            }
        }
    }
 
    return starArray.map((starSVG, idx) => <img key={idx} src={starSVG} alt="" />)
}

  

export {normalizedProducts, desaturateColor, starRating}