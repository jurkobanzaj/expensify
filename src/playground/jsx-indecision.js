console.log("App.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // prevents full page reload
    
    const option = e.target.elements.option.value; // gets value from input named "option"
    
    if (option) {
        app.options.push(option); // pushes imputs value into object app
        e.target.elements.option.value = ''; // clears input
        renderMe();
    } 
};

const clearList = () => {
    app.options = [];
    renderMe();
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderMe = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options here"}</p>
        <button disabled={app.options.length <= 1} onClick={onMakeDecision}>What Should I Do?</button>
        <button onClick={clearList}>Remove All</button>
        {
            // numbers.map((number) => {
            //     return <p key={number}>Number: {number}</p>;
            // })
        }
        <ol>
            {app.options.map((option) => <li key={option}>{option}</li>)}            
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/> 
            <button>Add option</button>
        </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderMe();

