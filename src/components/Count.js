import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class Count extends Component {
	render() {
		const { count, increase, decrease, asyncIncrease } = this.props;
		return (
			<div>
				<div>
					<h1>{count}</h1>
					<button type='button' onClick={increase}>
						increase
					</button>
					<button type='button' onClick={ () => asyncIncrease('aaaaa')}>
						asyncIncrease
					</button>
					<button type='button' onClick={decrease}>
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
		// return {
		// 	increase: () => dispatch(actions.increase()),
		// 	decrease: () => dispatch(actions.decrease()),
		// 	asyncIncrease: (text) => dispatch(actions.asyncIncrease(text))
		// };
		return bindActionCreators(actions, dispatch);
	}
	// { increase, decrease, asyncIncrease }//简洁写法，用actions对象作为connect的第二个参数
)(Count);
