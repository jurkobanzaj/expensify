import React from "react";

const Option = (props) => (
    // this component renders each option with info received from Options
    // to change look of each option modify this component
    <div>
        {props.optionText}
        <span> </span>
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export default Option;