import React from 'react';
import './style.css';
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

function BackToTop() {

 let myButton = document.getElementById("myBtn");

 window.onscroll = function () {
   scrollFunction();
//    console.log("scroll function");
 };

 function scrollFunction() {
   if(myButton){
     if (
       document.body.scrollTop > 100 ||
       document.documentElement.scrollTop > 100
     ) {
       myButton.style.display = "flex";
     } else {
       myButton.style.display = "none";
     }
   }
   }

//  for scrolling page to top when click on the top arrow button
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

  return (
    <div className='backToTop__container' id="myBtn" onClick={() => topFunction()}>
        <ArrowUpwardRoundedIcon className='backToTop__arrow'/>
    </div>
  )
}

export default BackToTop;