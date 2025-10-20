 import { Product } from "./discproduct"
 export function Recommendations({recom}){
        return(
            <div className="recom">
            <h1>Recommended For you</h1>
            <div className="grid">
                {recom.slice(0,4).map((item)=>{
                    return <Product name={item.name} image_url={item.image_url} price={item.price} className="productcard"/>
                })}
            </div>
            </div>
        )
    }