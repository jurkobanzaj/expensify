import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import './styles/base/reset.scss';
import './styles/Styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));