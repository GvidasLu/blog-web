import React, {useState} from "react";
import Search from "../search/Search";
import SearchCategory from "../searchcategory/SearchCategory";
import PostsData from "../../data/PostsData";
import Posts from "../posts/Posts";

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e) => {
        // console.log(e)
        setSearchTerm(e.target.value)
    }
    // console.log(searchTerm)
    const filteredPosts = PostsData.filter((post)=>{
        return post.title, post.category.includes(searchTerm)
    })
    return(
        <div className="main">
            <Search onSearch={handleInputChange} val={searchTerm}/>
            <Posts posts={filteredPosts}/>
            <SearchCategory onSearch={handleInputChange} val={searchTerm}/>
            <Posts posts={filteredPosts}/>
        </div>
    )
}
// Užduotis Prie post'ų duomenų pridėkite kategoriją. Vienai kategorijai turi priklausyti nemažiau, kaip 2 post'ai. Sukurkite paiešką, kuri atrenka post'us pagal įvestą kategoriją.
export default Main;