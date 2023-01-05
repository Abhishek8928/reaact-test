

// let h2Tag = React.createElement("h1", {
//     id:"title",
//     className:"title"
// },"A javascript is the library")
// this line 40 will give a object

// passing the react element inside the render method
// because h1Tag is injected inside the root

// let h1Tag = React.createElement("h2",{
    //     className:"heading-2"
    // }, "heading-2")
    // let h3Tag = React.createElement("h3",{
        //     className:"heading-3"
        // }, "heading-2")
        // let div = React.createElement("div",{
            //     className:"heading-2"
            // },[h1Tag,h3Tag])
            // root.render(div);

let h1Tag = React.createElement("h1", {}, "Namaste Javascript");

let button = React.createElement("button", {
    class: "btn-know",
}, "Know More");

let h2Tag = React.createElement("h2", {
    // style:"color:red",
    class:"title"
}, "Namaste Javascript");
let pTag = React.createElement("p", {
    class:"title"
}, "async and defer are the boolean attribute which are used along with script and loaded external javascript efficiently");
let card = React.createElement("div", {
    class:"card"
},[h2Tag , pTag])
let div = React.createElement("div", {
    class:'container'
},[h1Tag ,card]);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);






