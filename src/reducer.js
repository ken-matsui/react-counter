import fetch from 'isomorphic-fetch';

// 初期ステート設定
const INITIAL_STATE = {
  fuga: 0
}

// actionに応じてステート変更
export default function reducer(state_ = INITIAL_STATE, action_) {
  switch(action_.type) {
    case 'INCREMENT': {
      return { fuga: state_.fuga + 1 }
    }
    case 'DECREMENT': {
    	return { fuga: state_.fuga - 1 }
    }
    case 'API': {
      // let _url ='http://api.bitflyer.jp/v1/getmarkets';

      fetch('http://api.bitflyer.jp/v1/getmarkets', {mode:"cors"})
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
        console.log(response.json());
        return { fuga: response.json() };
        })
        .then(function(stories) {
          console.log(stories);
        });
    }
    default:
      return state_
  }
}