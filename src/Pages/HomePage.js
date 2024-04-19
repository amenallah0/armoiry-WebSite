import React from "react";
import Items from './../Components/Cards/Item';
import Comment from './../Components/Cards/Comments';
import Cards from './../Components/Cards/Card'

const HomePage=()=>{
    return (
<div>
      <Cards />
      <Items />
      <Comment />
    </div>
    )
}
export default HomePage;