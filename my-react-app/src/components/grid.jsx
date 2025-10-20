import { Product } from "./discproduct"
export function Grid({product}){
        
        return(
            <div className="grid">
                {product.slice(0,8).map((item)=>{
                    return <Product name={item.name} image_url={item.image_url} price={item.discount} className="productcard"/>
                })}
            </div>
        )
    }