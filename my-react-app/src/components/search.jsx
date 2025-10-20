export function Search({handleSubmit}){
    return(
        <div className="categories">
                <ul>
                    <li>Electronics & Media</li>
                    <li>Home & Kitchen</li>
                    <li>Clothing, Shoes & Jewelry</li>
                    <li>Health, Beauty & Personal Care</li>
                    <li>Toys, Kids & Baby</li>

                </ul>
                <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search" className="searchbox" name="search"></input>
                </form>
            </div>
    )
}