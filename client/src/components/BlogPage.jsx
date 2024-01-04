import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function BlogPage(){
    const params = useParams();
    const [pageDetails,setPageDetails] = useState("")
    const fetchData= async ()=>{
        try{
            const result = await axios.get("http://localhost:4001/post/"+params.id);
            setPageDetails(...result.data.data);
        }catch(e){
            console.log(e);
        }
    }
// console.log(pageDetails)

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
            <h2>{pageDetails.title}</h2>
            <p>{pageDetails.description}</p>
            <a href={pageDetails.url} target="_blank"><p>อ่านต่อ...</p></a>
        </>

    )
}