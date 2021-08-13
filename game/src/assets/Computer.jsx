import React, { Component } from 'react'
import {connect} from 'react-redux'
class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`
        const {computer} = this.props;
        return (
            <div>
                <div className="player">
                     <style>
                        {keyframe}
                    </style>
                    <div className="think">
                     <img style={{position: 'absolute',animation: `randomItem${Date.now()} 0.5s`, transform: 'rotate(0deg)', left:'30%'}}  src={computer.image} alt="" />
                    </div>
                    <div className="speech-bubble"></div>
                </div>
                <img src="./images/playerComputer.png" alt="" />
            </div>
        )
    }
}
const mapStateToProps  = state =>{
    return {
        computer: state.GameOnline.computer
    }
}
export default  connect(mapStateToProps)(Computer)