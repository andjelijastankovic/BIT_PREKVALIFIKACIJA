import { useState } from "react";
import './Search.css';
const api = 'https://api.giphy.com/v1/gifs/search?api_key=8llfrG1sFXRsHgN5dv4dTfx54flx7eiM&limit=20&offset=0&q=';

export const GifSearch = () => {

    const [search, setSearch] = useState('');
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    let searchGif = () => {
        if(search.length > 0) {
            setLoading(true);
            fetch(api+search).then((result) => {
                setLoading(false);
                return result.json();
            }).then((result) => {
                setGifs(result.data.map((gif) => {
                    return gif.images.fixed_height.url;
                }))
            }).catch(() => {
                setLoading(false);
                alert('Something went wrong...');
            })
        }
    }

    return (
        <>
            <h1 className="giphy">Search Giphy</h1>
            <div className="header">
                <div>
                    <input type="text" placeholder="Search gifs" 
                    value={search} onChange={(e) => setSearch(e.target.value)}/>

                    <button onClick={searchGif}>Search</button>
                </div>
            </div>
            <div className="result">
                { 
                    (loading) ? (
                        <div className="loading">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <div className="list">
                            {
                                gifs.map((gif, i) => {
                                    return (
                                        <div key={i} className="item">
                                            <img src={gif} alt={gif}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
}