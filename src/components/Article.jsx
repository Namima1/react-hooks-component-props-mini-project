import React from "react";

function Article({ title, date = "Janaury 1, 1970", preview }){
    return(
        <div>
        <article>
            <h3>{title} "title"</h3>
            <small>{date} "date"</small>
            <p>{preview} "preview"</p>
            
        </article>
        </div>
    );
}

export default Article;