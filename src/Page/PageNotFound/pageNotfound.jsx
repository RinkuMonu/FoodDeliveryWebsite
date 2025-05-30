import React from "react";

const NotFound = () =>{
    return(
        <>
        <div className="w-full md:h-[100vh] h-[70vh] flex justify-center items-center  bg-white ">

            <img src="https://cdn.dribbble.com/userupload/21898158/file/original-255a4c5a28a9803ea6ab9b065fff2b14.gif" alt="" className="bg-cover  rounded-sm cover"
            onClick={()=>window.history.back()}
            />
        </div>
        </>
    )
}
export default NotFound;
