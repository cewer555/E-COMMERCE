export function Footer(){
        return(
            <footer>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
            <div style={{textAlign:"center"}}>
                <h3 style={{color:"springgreen"}}>Company Information</h3>
                <br></br>
                <ul style={{display:"flex",flexDirection:"column"}}>
                    <li>About Us</li>
                <br></br>

                    <li>Careers</li>
                <br></br>

                    <li>Press</li>
                <br></br>

                </ul>
            </div>
            <div style={{textAlign:"center"}}>
            <h3 style={{color:"springgreen"}}>Customer Account & Orders</h3>
                <br></br>
                <ul style={{display:"flex",flexDirection:"column"}}>
                    <li>Your Account</li>
                <br></br>

                    <li>Order Status</li>
                <br></br>

                    <li>Cart</li>
                <br></br>

                </ul>
            </div>
            <div style={{textAlign:"center"}}>
            <h3 style={{color:"springgreen"}}>Help & Legal</h3>
                <br></br>
                <ul style={{display:"flex",flexDirection:"column"}}>
                    <li>Help Center,</li>
                <br></br>

                    <li>Shipping Policy,</li>
                <br></br>

                    <li>Privacy Notice</li>
                <br></br>

                </ul>
            </div>
        </div>
    </footer>
        )
    }