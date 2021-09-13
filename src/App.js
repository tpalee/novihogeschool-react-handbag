import React from 'react';
import './App.css';
import Article from "./components/Article";
import Tile from "./components/Tile";

//import images
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import products from "./assets/brand.png"
import ourstory from "./assets/our_story.png"
import Button from "./components/Button";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <!--Add the Button components with the required data-->
                <Button name="to the collection" disabled={false}></Button>
                <Button name="shop all bags" disabled={false}></Button>
                <Button name="pre-order" disabled={true}></Button>
            </nav>
            <main>
                <!--Add the Article components with the required data-->
                <Article name="The handy Bag" image={bag1} redSpan="Best seller" price="400"></Article>
                <Article name="The stylish" image={bag2} redSpan="Best seller" price="250"></Article>
                <Article name="The simple Bag" image={bag3} redSpan="New collection" price="300"></Article>
                <Article name="The trendy Bag" image={bag4} redSpan="New collection" price="150"></Article>
            </main>
            <footer>
                <!--Add the Tile components with the required data-->
                <Tile title="THE BRAND">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam dignissimos error fugiat
                        incidunt ipsam necessitatibus optio, qui quo voluptates.</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam dignissimos error fugiat
                        incidunt ipsam necessitatibus optio, qui quo voluptates.</p>
                </Tile>
                <Tile image={products}></Tile>
                <Tile image={ourstory}></Tile>
                <Tile title="OUR STORY">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam dignissimos error fugiat
                        incidunt ipsam necessitatibus optio, qui quo voluptates.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



