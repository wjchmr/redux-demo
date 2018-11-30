import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../redux/actions";

class Count extends Component {
    render() {
        console.log(this.props);
        const { count, increase, decrease } = this.props;
        return (
            <div>
                <div>
                    <h1>{count.toString()}</h1>
                    <button type="button" onClick={() => increase()}>
                        increase
                    </button>
                    <button type="button" onClick={() => decrease()}>decrease</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ count: state.count }),
    // (dispatch) => ({
    //         increase: () => dispatch(increase()),
    //         decrease: () => dispatch(decrease())
    //     })
    {increase,decrease}
)(Count);
