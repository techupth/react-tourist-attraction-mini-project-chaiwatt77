import { useState,useEffect } from "react";
import axios from 'axios';
import Blog from "./Blog";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home(){
    const [attractionData,setAttractionData] =useState([]);
    const [searchText,setSearchText] = useState("");

    const fetchData= async ()=>{
        try{
            const result = await axios.get("http://localhost:4001/trips?keywords="+searchText)
            setAttractionData(result.data.data)
        }catch(e){
            console.log(e);
        }
    }

    console.log(attractionData)

    useEffect(()=>{
        fetchData();
    },[searchText])

    const submitForm = (e)=>{
        e.preventDefault();
        fetchData();
        setSearchText("");
    }

    return (
        <div className="container">
            <Link to="/" style={{ textDecoration: 'none' }}><h2>เที่ยวไหนดี</h2></Link>
            <form onSubmit={submitForm}>
                <label htmlFor="search"><p>ค้นหาที่เที่ยว</p></label>
                <input id="search" type="text" value={Array.isArray(searchText) ? searchText.join(' '):searchText} placeholder="หาที่เที่ยวแล้วไปกัน ..." onChange={(e)=>setSearchText(e.target.value)}/>
            </form>
            <div className="blog-post">
                {
                    attractionData.map((item)=>(
                        <Blog {...item} key={item.eid} fetchData={fetchData} setSearchText={setSearchText}/>
                    ))
                }
            </div>
        </div>
    )
}



/*
//แบบไม่ต้อง fetch ใหม่
import { useState,useEffect } from "react";
import axios from 'axios';
import Blog from "./Blog";

export default function Home(){
    const [attractionData,setAttractionData] =useState([]);
    const [searchText,setSearchText] = useState("");

    const endpoint = "http://localhost:4001";
    const fetchData= async ()=>{
        try{
            const result = await axios.get(endpoint+"/trips?keywords=")
            setAttractionData(result.data.data)
        }catch(e){
            console.log(e);
        }
    }

    console.log(attractionData)

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        const result = attractionData.filter((item)=>item["title"].includes(searchText));
        setAttractionData(result);
    },[searchText])

    return (
        <>
            <h2>เที่ยวไหนดี</h2>
            <p>ค้นหาที่เที่ยว</p>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            {
                attractionData.map((item)=>(
                    <Blog {...item} key={item.eid}/>
                ))
            }

        </>
    )
}
*/

/*
//แบบไม่ต้อง fetch ใหม่ + มีปุ่มค้นหา
import { useState,useEffect } from "react";
import axios from 'axios';
import Blog from "./Blog";

export default function Home(){
    const [attractionData,setAttractionData] =useState([]);
    const [searchText,setSearchText] = useState("");

    const endpoint = "http://localhost:4001";
    const fetchData= async ()=>{
        try{
            const result = await axios.get(endpoint+"/trips?keywords=")
            setAttractionData(result.data.data)
        }catch(e){
            console.log(e);
        }
    }

    console.log(attractionData)

    useEffect(()=>{
        fetchData();
    },[])

    const submit=(e)=>{
        e.preventDefault();
        const result = attractionData.filter((item)=>item["title"].includes(searchText));
        setAttractionData(result);
    }

    return (
        <>
            <h2>เที่ยวไหนดี</h2>
            <p>ค้นหาที่เที่ยว</p>
            <form onSubmit={submit}>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button type="submit">ค้นหา</button>
            </form>

            {
                attractionData.map((item)=>(
                    <Blog {...item} key={item.eid}/>
                ))
            }

        </>
    )
}
*/