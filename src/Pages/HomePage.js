import React from "react";
import Items from './../Components/Cards/Item';
import Comment from './../Components/Cards/Comments';
import Cards from './../Components/Cards/Card'
import ProductType from "../Components/Cards/ProductType";

const HomePage=()=>{
    return (
    <div>
      <Cards />
      <ProductType />
      <Items />
      <Comment />
    </div>
    )
}
export default HomePage;