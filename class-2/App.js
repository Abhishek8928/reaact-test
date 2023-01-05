
import React from "react";
import ReactDOM  from "react-dom/client";
let root = ReactDOM.createRoot(document.getElementById("root"));

let h1Tag = React.createElement("h1", {
    class:"title"
}, "Hello World🚀")

root.render(h1Tag)