import React, { Component } from 'react'
import {connect} from 'react-redux'
 class PlayGame extends Component {
    render() {
        const {result} = this.props;
        return (
            <div className="playGame">
               <div className="result text-warning m-4">{result.result}</div>
               <div className="text-success font-weight-bold win">Số bàn thắng: <span className="text-warning font-weight-bold ml-2">{result.soBanThang}</span></div>
               <div className="text-success font-weight-bold sum">Tổng số bàn chơi: <span className="text-warning font-weight-bold ml-2">{result.tongBanChoi}</span></div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        result: state.GameOnline
    }
}
export default connect(mapStateToProps)(PlayGame)