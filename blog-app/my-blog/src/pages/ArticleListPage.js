import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticleListPage = () => {

    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
            
            {/* {articles.map(article => (
                <Link key={article.name } to={`/articles/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>   
            ))} */}
        </>
    );

}

export default ArticleListPage;