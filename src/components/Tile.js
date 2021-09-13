import React from 'react';


function Tile({image, title, children}) {
    // if there is an image create the image tile
    if (image) {
        return (
            <>
                <section>
                    <img src={image} alt={image.toString()}/>
                </section>
            </>
        )
    //when there is no image create a text-tile
    //in the props.children you can make multiple elements
    } else {
        return (
            <>
                <section>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </section>
            </>
        );
    }
}

export default Tile;