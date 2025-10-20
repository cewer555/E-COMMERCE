import {Grid} from "./grid"
import {Recommendations} from "./recommendations"
import { Search } from "./search"
export function Home({product,recom,handleSubmit}){
        return (
            <main>
                <Search handleSubmit={handleSubmit}/>
        <img className="hero" src="src/assets/hero2.png"></img>
        <button className="sn">shop now</button>
        <div className="sliderwindow">
        <h2 className="slider1 slider2">sale!!</h2>
        <h2 className="slider">sale!!</h2>
        <h2 className="slider">sale!!</h2>
        <h2 className="slider">sale!!</h2>
        </div>
        <Grid product={product}/>
        <div className="top">
        <div className="topdeal">
            <div>
            <h1>TOP</h1>
            <h1>DEALS</h1>
            </div>
            <img src="src/assets/download.jfif" height={"100px"} width={"200px"}></img>
            <img src="src/assets/img2.jfif" height={"100px"} width={"200px"}></img>
            <img src="src/assets/img3.jfif" height={"100px"} width={"200px"}></img>
            <img src="src/assets/im4.jfif" height={"100px"} width={"200px"}></img>
            <img src="src/assets/img5.jfif" height={"100px"} width={"300px"}></img>



        </div>
        </div>
        <Recommendations  recom={recom}/>
 
    </main>
        )
    }