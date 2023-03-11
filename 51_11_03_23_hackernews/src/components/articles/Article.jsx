import { useEffect, useState } from "react";
import './Article.css';

export const Article = ({id}) => {

    const [article, takeArticle] = useState([]);

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
        .then(
            response => {takeArticle(response)})
    }, [id]);

    const setTime = (time) => {
        const newTime = Math.ceil(time / (1000*60*60));
        if(newTime > 23) {
            const days = Math.ceil(newTime / 24);
            return `${days} days ago`;
        } else {
            return `${newTime} hours ago`;
        }
    }

    const time = setTime(article.time);

    return (
        <li>
            <h4>{article.title} <span><a href={article.url}>({article.url})</a></span> </h4>
            <div className="spans">
                <span>{article.score} points</span>
                <span className="author">{article.by}</span>
                <span className="time">({time})</span>
                <span>{article.descedants}</span>
            </div>
        </li>
    );
}