import React from "react";
import Option from "./Option";

const Options = (props) => (
    // this component desides how many elements there shoud be and what info to pass
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link" 
                onClick={props.handleDeleteOptions}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add an option to get started</p>}
        {props.options.length > 1 && <p className="widget__message">There are {props.options.length} options</p>}
        { // next line creates list from array
            props.options.map((option, index) => ( // index дістає номер об'єкта по порядку з масиву 
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1} // sends number to list item
                    handleDeleteOption={props.handleDeleteOption}    
                />
            ))
            
        }
    </div>
);

export default Options;