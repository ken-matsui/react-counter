import React from 'react';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <span className="text">{this.props.fuga}</span><br/>
          <button className="square_btn plus" onClick={ () => this.props.handleClick("PLUS") }>プラス</button>
          <button className="square_btn minus" onClick={ () => this.props.handleClick("MINUS") }>マイナス</button>
          <button onClick={ () => this.props.handleClick("API") }>API</button>
        </div>
    );
  }
}