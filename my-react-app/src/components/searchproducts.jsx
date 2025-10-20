import { Search } from "./search"
export function SearchProd({proddarray,handleSubmit,Addcart}){
    
    return(
        <>
        <Search handleSubmit={handleSubmit}/>
        <div className="searchresult">
        {proddarray.map((item)=>{
        return <Productcard item={item}/>
        })}
        </div>
        </>
    )
    function Productcard({item}){
        console.log(item.name)
        return(
            <div className="prod">
                <div>
                <img src={item.image_url} height={"200px"} width={"200px"} className="productIMG"></img>

                </div>
                <div className="proddetail">
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                    <p style={{color:"green"}}>free delivery</p>
                    <button className="addtocart" onClick={Addcart}>Add to cart</button>
                    <button className="buy">Buy</button>
                </div>
            </div>
        )
    }
}