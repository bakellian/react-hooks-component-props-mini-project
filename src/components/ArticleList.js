import react from "react";
import App from "./App";
import Article from "./Article";

function ArticleList(props) {
    const postArr = props.blogPosts.map((post) => {
        return <Article 
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
            />
    })
    return(
       <main>
           {postArr}
           {/* return an array of article components */}
       </main>
    )
}

export default ArticleList;