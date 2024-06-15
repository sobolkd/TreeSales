// src/App.js
import React from 'react';
import Carousel from './Js/Carousel';

const categories = [
    { 
        name: 'Category 1', 
        description: 'Description for Category 1', 
        image: 'https://via.placeholder.com/300x200' 
    },
    { 
        name: 'Category 2', 
        description: 'Description for Category 2', 
        image: 'https://via.placeholder.com/300x200' 
    },
    { 
        name: 'Category 3', 
        description: 'Description for Category 3', 
        image: 'https://via.placeholder.com/300x200' 
    },
    { 
        name: 'Category 4', 
        description: 'Description for Category 4', 
        image: 'https://via.placeholder.com/300x200' 
    },
    { 
        name: 'Європейська', 
        description: 'Ялинка європейська', 
        image: 'https://via.placeholder.com/300x200' 
    }
];

function App() {
    return (
        <div className="App">
            <Carousel categories={categories} />
        </div>
    );
}

export default App;
