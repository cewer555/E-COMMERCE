export function Product({image_url,name,price}){
        return (
<>
            <div className="product">
                <div className="disc">
                <p>{name}</p>
            <h2 className="discnt">{price}</h2>
                </div>
            <div className="imgdiv">
            <img width={"92%"} height={"80%"} src={`${image_url}`} className="prodimg"></img>

            </div>
            
            <a>see more details</a>
            </div>
            
            </>
        )
    }