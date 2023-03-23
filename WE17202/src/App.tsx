import { useEffect, useState } from "react";
import Counter from "./component/Counter";
import ProductsList from "./component/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductAdd from "./component/ProductAdd";
import ProductEdit from "./component/ProductEdit";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ProductsList/>}/>
                <Route path="/add" element={<ProductAdd/>}/>
                <Route path="/edit" element={<ProductEdit/>}/>
            </Routes>
        </div>
    );
}

export default App;
