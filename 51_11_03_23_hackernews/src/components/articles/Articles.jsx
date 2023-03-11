import { useEffect, useState } from "react";
import {Article} from "./Article";

export const Articles = () => {
    const [idArticles, takeIds] = useState([]);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json').
        then((response) => 
            response.json()
        ).then((articles10) => takeIds(articles10.slice(0,10)))
    }, []);

    return (
        <div>
            <ol>
                {idArticles.map((id) => <Article key={id} id={id} />)}
            </ol>
        </div>
    );
}