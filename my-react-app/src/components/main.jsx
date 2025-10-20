// import product from "../data"
import { Home} from "./home"
import { Search } from "./search"
import axios from "axios"
import { SearchProd } from "./searchproducts"
import React from "react"
export default function Main({Addcart}){
    axios.defaults.withCredentials=true
    const [response,setResponse]=React.useState(null)
    const [mainProd,setMainprod]=React.useState(null)
    const [recom,setRecom]=React.useState(null)

    React.useEffect(()=>{
        async function fetchdata(){
            let result=await axios.get("http://localhost:3000/api/v1/discounts")
            console.log(result.data)
        setMainprod(result.data)
        }
        async function fetchdata1(){
            let recom=await axios.get("http://localhost:3000/api/v1/recom")
            console.log(recom.data)
        setRecom(recom.data)
        }
        fetchdata1()
        fetchdata()
    },[])
    function HandleResponse(){
        if(response){
            if(response.data.length===0)
            return (<><Search handleSubmit={handleSubmit}/>
            <h1>Product Not Found</h1>
            </>)
            else{
                console.log("hello i rna")
            return (<SearchProd Addcart={Addcart} proddarray={response.data} handleSubmit={handleSubmit}/>)

            }
        }
        else{
            if(mainProd){
                console.log(mainProd)
                return <Home product={mainProd} recom={recom} handleSubmit={handleSubmit}/>
            }   
            else
                return (<h1>sorry could not reach the server </h1>)
        }
    }
    return (
        <HandleResponse/>
    )
   
    
async function handleSubmit(e){
        e.preventDefault()
        const formdata=new FormData(e.currentTarget)
        const result=await axios.post("http://localhost:3000/api/v1/searchQuery",{query:formdata.get("search")})
        console.log(result.data)
        setResponse(result)
    }
    
    
}