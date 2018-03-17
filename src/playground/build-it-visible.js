class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false,
            // hiddenText: (
            //                 <div>
            //                     <p>Here goes some text to show. Hahaha!</p>
            //                 </div>
            //             )
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible ? "Hide details" : "Show details"}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Here goes some text to show. Hahaha!</p>
                    </div>
                ) 
                // this.state.hiddenText}
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let indicator = false;

// const showDetails = () => {
//     indicator = !indicator;
//     renderMe();
// };

// const renderMe = () => {
//     const template = (
//         <div>
//         <h1>Visibility toggle</h1>
//         <button onClick={showDetails}>
//             {indicator ? "Hide details" : "Show details"}
//         </button>
//         {indicator && (
//             <div>
//                 <p>Here goes some text to show. Hahaha!</p>
//             </div>
//         )}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// };
// renderMe();