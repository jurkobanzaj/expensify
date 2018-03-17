class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        console.log("componentDidMount!"); // fires up when component mounts
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate!"); // fires up when component updates f. e. state changes
    }
    componentWillUnmount() {
        console.log("componentWillUnmount"); // fires before component (f. e. entire page) gone
    }
    handleDeleteOptions() {
        // this.setState(() => { // this function could be written in more compact way
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            // next line looks in array for proper option AND REMOVES IT
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option) // option may be an array [option]
        //     };
        // });
        this.setState((prevState) => ({
            options: prevState.options.concat(option) // option may be an array [option]
        }));
    }
    render() {
        const subtitle = "Put your life in the hands of a computer";

        return(
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision"
};

const Action = (props) => {
    return(
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    // this component desides how many elements there shoud be and what info to pass
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            <p>There are {props.options.length} options</p>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}    
                    />
                ))
                // this line creates list from array
            }
        </div>
        );
};

const Option = (props) => {
    // this component renders each option with info received from Options
    // to change look of each option modify this component
    return(
        <div>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        // precise formula to fetch value from input is e.target.elements.option.value
        // .trim() removes spaces from before and after value
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return{
        //         error: error // may be shortcuted for just "error"
        //     };
        // });
        this.setState(() => ({ error: error }));
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => { // props in stateless components is analog to this.props in classes
//     return(
//         <div>
//             <p>Name: {props.name}</p> 
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }; // correct call to name prop is in line above
// 
// <User name="Yuriy" age="40" />

ReactDOM.render(<IndecisionApp options={["Option one", "Option two"]} />, document.getElementById('app'));