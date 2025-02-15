import Link from "next/link";
import { useState } from "react";
import Header from "../Layout/Header";

const HomePage = () => {
   function btn_close(){
      document.getElementById("popup_show").style.display = "none";
  }
   return (
      <>
      <Header />
    

      </>
   );
};

export default HomePage;
