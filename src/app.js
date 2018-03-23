import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.scss';
import './styles/Styles.scss'

const Layout = (props) => {
    return(
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));