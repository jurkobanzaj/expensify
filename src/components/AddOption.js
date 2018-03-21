import React from "react";

export default class AddOption extends React.Component {
    state = { // new syntax. Instead of str. 10-12
        error: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }

    // handleAddOption(e) {
    handleAddOption = (e) => { // new style, no need to get bound manualy
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
        if (!error) {
            e.target.elements.option.value = "";
        };
    };

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
    };
};
