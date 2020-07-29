//import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/app'

// グローバルなstateから必要な値をとってきて、コンポーネントのthis.propsとしてセット
// 今回はいずれにしろstateのプロパティには{fuga}しか無いので、stateをまるごと返してます
function mapStateToProps(state_) {
  return state_
}

// clickでactionを飛ばす(そのまま値を流す)
function mapDispatchToProps(dispatch_) {
  return {
    handleClick: (x_) => { dispatch_(AppActions.increment(x_)) }
  }
}

//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)