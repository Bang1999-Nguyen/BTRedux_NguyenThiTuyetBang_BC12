import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Player extends Component {
    render() {
        const {arraySelect,  selectItem} = this.props;
        return (
            <div className="container-fluid">
                <div className="player">
                    <div className="think">
                        {
                            arraySelect.map((item, index) => {
                                if(item.datCuoc){
                                    return (
                                        <img src={item.image} alt=""  key={index}/>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="speech-bubble"></div>
                </div>
                <img src="./images/player.png" alt="" />
                <div className="row selectMethod">
                    {
                        arraySelect.map((item, index) => {
                            let background = {};
                            if(item.datCuoc){
                                background = {backgroundColor: '#00CCCC'}
                            }
                            return (
                                <div className="col-4 selectImg" key={index}>
                                <button className="btn-select" style={background} onClick={() => selectItem(item)}>
                                 <img src={item.image} alt="" />
                                </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        arraySelect: state.GameOnline.arraySelect
    }
}
const mapDispatchToProps = dispatch => {
    return{
        selectItem: item =>{
            const action = {
                type: 'SELECT_ITEM',
                payload: item,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
