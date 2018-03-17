class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state =  {
            // count: props.count
            count: 0
        }
    }
    componentDidMount() {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState (() => ({ count: count }));
        } 
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevState.count !== this.state.count) { // checks if anything changed at all
            localStorage.setItem("count", this.state.count);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });        
    }
    handleReset() {
        this.setState({ // older version of setState - passing an object instead of function
            count: 0
        });
        // this.setState(() => {
        //     return {
        //         count: 0
        //     };
        // });        
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = { // commented altogether with line 8. Data will be reading from local storage
//     count: 0
// };

ReactDOM.render(<Counter count="5" />, document.getElementById('app'));

// console.log("App.js is running");

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };



// const appRoot = document.getElementById("app");


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();