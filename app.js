import React from 'react'
import ReactDOM from 'react-dom/client'

var h2ElementJS=document.createElement("h2");
h2ElementJS.innerHTML="This div is generated by Javascript Dynamically";
        document.getElementById("divJs").append(h2ElementJS);

//Single Element
// var h2Element=React.createElement("h2",{id:"h2Element"},"This div is generated by React Dynamically");
//         var root=ReactDOM.createRoot(document.getElementById("divReact"));
//         root.render(h2Element);

//Multiple Elements
var parent=React.createElement("div",{id:"divParent"},

    [
        React.createElement("div",{id:"divFirstChild"},
            React.createElement("h4",{},"This is a First Grand Child, Who are siblings"))
            ,
            React.createElement("div",{id:"divSecondChild"},
                React.createElement("h4",{},"This is a Second Grand Child, Who are siblings"))

    ]);

    var root=ReactDOM.createRoot(document.getElementById("divReact"));
    root.render(parent);
    //---------------------------------------------------------------------------------------
    /* Craete Elements using JSX */
    var jsxReactElement=(<h2 id="h2Id" className='h1'>
        This is an element by JSX</h2>)

    var jsxRoot=ReactDOM.createRoot(document.getElementById("divReactWithJSX"));
    jsxRoot.render(jsxReactElement);

    // React Components
        // 1. Class Based Components:- Class Based Components uses Javascript classes to create the components
        // 2. Functional Components:- Functional Based Components uses Javascript Functions to create the components

    // Functional Component is nothing but a javascript function which returns JSX
    // To create Functiona Component uses Arraow functions

    const HeaderFunctionalComponent=()=><h2>I am Functional Header</h2>
    const TitleComponent=()=>(
        <div>
                <h4>I am a title</h4>
                <HeaderFunctionalComponent/>
                {jsxReactElement}
        </div>
    )
    jsxRoot.render(<TitleComponent/>);


