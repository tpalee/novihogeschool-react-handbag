import React from 'react';

function Article({name, redSpan, price, image}) {
    return (
        <>
            <article>
                <span>{redSpan}</span>
                <img src={image} alt={name.toString()}/>
                <p> {name}</p>
                <h4>&euro;{price}</h4>
            </article>
        </>
    )
}
export default Article;