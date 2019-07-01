import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease, asyncIncrease } from "../redux/actions";

class Count extends Component {
    render() {
        const { count, increase, decrease, asyncIncrease } = this.props;
        console.log({ count, increase, decrease, asyncIncrease });
        return (
            <div>
                <div>
                    <h1>{count}</h1>
                    <button type="button" onClick={() => increase()}>
                        increase
                    </button>
                    <button type="button" onClick={() => asyncIncrease()}>
                        asyncIncrease
                    </button>
                    <button type="button" onClick={() => decrease()}>
                        decrease
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ count: state.count }),
    (dispatch, ownProps) => {
        console.log(ownProps)
        return {
            increase: () => dispatch(increase()),
            decrease: () => dispatch(decrease()),
            asyncIncrease: () => dispatch(asyncIncrease())
        };
    }
    // { increase, decrease, asyncIncrease }
)(Count);
