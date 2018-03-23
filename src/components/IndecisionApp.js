import React from 'react';
import AddOption from "./AddOption"; // imports class exported by default from AddOption file
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            // next line looks in array for proper option AND REMOVES IT
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }));
    };
    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ 
            selectedOption: option 
        }));
    };
    
    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option) // option may be an array [option]
        }));
    };

    handleCloseModal = () => {
        this.setState(() => ({ // lack of parenthesis fails state change without error message
            selectedOption: undefined
        }));
    };

    componentDidMount() { // fires up when component mounts/appears/sees the world for the rirst time
        try { // debug method: trys to run the code if it runs that's fine, if no, runs catch
            const json = localStorage.getItem('options'); // gets items from local storage 
            const options = JSON.parse(json); // creates JS object from recovered items
            if (options) {
                this.setState(() => ({ options: options })) // updates options array with new items
            }
        } catch (e) {
            // Do nothing
        }
    };

    componentDidUpdate(prevProps, prevState) { // fires up when component updates f. e. state changes
        if (prevState.options.length !== this.state.options.length) { // checks if empty
            const json = JSON.stringify(this.state.options); // prepares data for local storage. the other time it was skipped
            localStorage.setItem("options", json); // writes data to local storage
        }
    };

    componentWillUnmount() {
        console.log("componentWillUnmount"); // fires before component (f. e. entire page) gone
    };

    render() {
        const subtitle = "Put your life in the hands of a computer";

        return(
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick} 
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />                    
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    };
};