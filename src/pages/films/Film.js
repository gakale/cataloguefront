import React , {useState, useEffect}  from "react";
import axios from "axios";

export default function Film() {
    const [Films, setFilms] = useState([]);
   const  moviesRequest = async () => {
        await axios.get(`${process.env.REACT_APP_BACDEND_URL}films`).then(
            (res)=>{
                console.log(res)
            }
        )
    }
    return (

        <div>Films</div>
    );
}