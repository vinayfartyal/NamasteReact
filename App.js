/* <div id="parent">
    <div id="child">
        <h1>Hello fron child</h1>
        <h2>World from child</h2>
    </div>
    <div id="child1">
        <h1>Hello from child1</h1>
        <h2>World from child1</h2>
    </div>
</div> */

const parent = React.createElement("div",
    { id: "parent" },
    [React.createElement("div",
        { id: "child" },
        [React.createElement("h1",
            {},
            "Hello fron child"),
        React.createElement("h2",
            {},
            "World from child")
        ]),
    React.createElement("div",
        { id: "child1" },
        [React.createElement("h1",
            {},
            "Hello fron child1"),
        React.createElement("h2",
            {},
            "World from child1")
        ])
    ]);
// JSX is used to remove all this tidiest work
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);