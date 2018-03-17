import React from "react";
import Option from "./Option";

const Options = (props) => {
    // this component desides how many elements there shoud be and what info to pass
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Add an option to get started</p>}
            {props.options.length > 1 && <p>There are {props.options.length} options</p>}
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

export default Options;