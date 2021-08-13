import React, { Component } from 'react'
import './game.css'
import Player from './Player'
import Computer from './Computer'
import PlayGame from './PlayGame'
import {connect} from 'react-redux'
 class Home extends Component {
    render() {
        const {playGame} = this.props
        return (
            <div className="game-container text-center">
                <div className="container-fluid">
                <div className="row pt-4 text-center">
                       <div className="col-4">
                            <Player/>
                       </div>
                       <div className="col-4">
                            <PlayGame/>
                            <button className="btn btn-light" onClick={() => playGame()}>Play Game</button>
                       </div>
                       <div className="col-4">
                            <Computer/>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'PLAY_GAME',
                })
                count++;
                if(count > 10){
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100)
        }
    }
}
export default connect(null,mapDispatchToProps)(Home)
