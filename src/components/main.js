import logo from "../logo.svg";
import React from "react";
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import {decreaseCounter, increaseCounter} from "../data/actions/counter-actions";

const mapStateToProps = (state) => {
    return {
        count: state.counter.data.count,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    increaseCounter: (payload) => increaseCounter(payload),
    decreaseCounter: (payload) => decreaseCounter(payload),
}, dispatch);


class Main extends React.Component {

    doIncreaseCounter = () => {
        this.props.increaseCounter(this.props.count);
    };

    doDecreaseCounter = () => {
        this.props.decreaseCounter(this.props.count);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        {this.props.count}
                    </p>
                    <a
                        className="App-link"
                        onClick={this.doIncreaseCounter}
                    >
                        Increase
                    </a>
                    <a
                        className="App-link"
                        onClick={this.doDecreaseCounter}
                    >
                        Decrease
                    </a>
                </header>
            </div>
        );
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Main);