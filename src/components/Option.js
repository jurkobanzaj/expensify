import React from "react";

const Option = (props) => (
    // this component renders each option with info received from Options
    // to change look of each option modify this component
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <span> </span>
        <button
            className="button button--link" 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export default Option;