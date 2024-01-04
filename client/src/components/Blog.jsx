import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog(props) {
  const { eid, title, photos, description, tags, url, fetchData, setSearchText } = props;
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);

  return (
    <div className="container">
      <div className="post-container">
        <div className="thumbnail"><img src={photos[0]} alt="" /></div>
        <div className="page-datail">
          <Link to={`/blog/${eid}`}><h3>{title}</h3></Link>
          <div>
            {show && description.substring(0, 99)}
            {show2 && description}
            <a style={{ cursor: "pointer" }} onClick={() => {
              setShow(!show);
              setShow2(!show2);
            }}> ...</a>
            <a style={{ display: "block" }} href={url} target="_blank" rel="noopener noreferrer">อ่านต่อ</a>
            <div>
              <span>หมวด</span>{
                tags.map((tag, index) => (
                  <a style={{ cursor: "pointer" }} onClick={() => {
                    setSearchText((prev) => {
                      let newResult = `${prev} ${tag}`;
                      return newResult;
                    });
                  }} key={index}> {index === tags.length - 1 ? "และ " + tag : tag} </a>
                ))
              }
            </div>
            <div>
              <span style={{ cursor: "pointer" }} onClick={()=>{
                navigator.clipboard.writeText(url);
              }}>Click to copy URL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



/*
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog(props) {
  const { eid, title, photos, description, tags, url, fetchData, setSearchText } = props;
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => { // ค่าที่ถูก copy มาจาก url บรรทัดนี้
      alert("URL copied to clipboard");
    }).catch((err) => {
      console.error('Unable to copy URL to clipboard', err);
    });
  };

  return (
    <div className="container">
      <div className="post-container">
        <div className="thumbnail"><img src={photos[0]} alt="" /></div>
        <div className="page-datail">
          <Link to={`/blog/${eid}`}><h3>{title}</h3></Link>
          <div>
            {show && description.substring(0, 99)}
            {show2 && description}
            <a style={{ cursor: "pointer" }} onClick={() => {
              setShow(!show);
              setShow2(!show2);
            }}> ...</a>
            <a style={{ display: "block" }} href={url} target="_blank" rel="noopener noreferrer">อ่านต่อ</a>
            <div>
              <span>หมวด</span>{
                tags.map((tag, index) => (
                  <a style={{ cursor: "pointer" }} onClick={() => {
                    setSearchText((prev) => {
                      let newResult = `${prev} ${tag}`;
                      return newResult;
                    });
                  }} key={index}> {index === tags.length - 1 ? "และ " + tag : tag} </a>
                ))
              }
            </div>
            <div>
              <span style={{ cursor: "pointer" }} onClick={copyToClipboard}>Click to copy URL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

*/