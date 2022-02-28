import Post from "../post/Post"
import PostsData from "../../data/PostsData"

const Posts = () => {
    return(
        <section class="pt-4">
            <div class="container px-lg-5">
                {/*<!-- Page Features-->*/}
                <div class="row gx-lg-5">
                    {PostsData.map((post)=>
                        <Post
                            key ={post.id}
                            title ={post.title}
                            content ={post.content}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Posts