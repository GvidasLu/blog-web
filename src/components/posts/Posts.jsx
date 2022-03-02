import Post from "../post/Post"

const Posts = (props) => {
    return(
        <section class="pt-4">
            <div class="container px-lg-5">
                {/*<!-- Page Features-->*/}
                <div class="row gx-lg-5">
                    {props.posts.map((post)=>
                        <Post
                            key ={post.id}
                            title ={post.title}
                            content ={post.content}
                            category = {post.category}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Posts