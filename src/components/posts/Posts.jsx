import Post from "../post/Post"

const Posts = () => {
    return(
        <section class="pt-4">
            <div class="container px-lg-5">
                {/*<!-- Page Features-->*/}
                <div class="row gx-lg-5">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </section>
    )
}

export default Posts