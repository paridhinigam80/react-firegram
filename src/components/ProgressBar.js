import React from "react";
import { useEffect } from "react/cjs/react.development";
import useStorage from "../hooks/UseStorage";

const ProgressBar=({file, setFile})=>
{
    const {url ,progress} = useStorage(file);
    useEffect(()=>{
        if(url){
setFile(null);
        }
    },[url,setFile])
    console.log(progress, url);
    return(
        <div className="progress-bar" style={{width:progress +'%'}}></div>
    )
  
}
export default ProgressBar;