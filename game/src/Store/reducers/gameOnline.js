const inittialState = {
    arraySelect:[
        {ma:'bao', image:"./images/bao.png", datCuoc:true},
        {ma:'keo', image:"./images/keo.png", datCuoc:false},
        {ma:'bua', image:"./images/bua.png", datCuoc:false}
    ],
    result: 'Match has been drawn !',
    soBanThang: 0,
    tongBanChoi:0,
    computer: {ma:'bao', image:"./images/bao.png"}
}
const GameOnline =  (state =  inittialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SELECT_ITEM':
            let arraySelectUpdate = [...state.arraySelect]
            arraySelectUpdate = arraySelectUpdate.map((item, index) =>{
                return {...item, datCuoc: false}
            })
            let index = arraySelectUpdate.findIndex(item => item.ma === payload.ma);
            if(index !== -1){
                arraySelectUpdate[index].datCuoc = true;
            }
            state.arraySelect = arraySelectUpdate;
            return {...state}
        case 'PLAY_GAME':
            let numberRandom = Math.floor(Math.random() * 3);
            let randomItem = state.arraySelect[numberRandom];
             state.computer = randomItem;
            return {...state};
            case 'END_GAME':
                let player = state.arraySelect.findIndex(item => item.datCuoc === true)
                let itemSelect = state.arraySelect[player]
                switch (itemSelect.ma) {
                    case 'keo':
                        if(state.computer.ma === 'keo'){
                            state.result = 'Match has been drawn !'
                        }else if(state.computer.ma === 'bao'){
                            state.result = "I'm iron men, i love you 3000";
                            state.soBanThang++;
                        }else{
                            state.result = 'You Lose !'
                        }
                        break;
                    case 'bua':
                        if(state.computer.ma === 'keo'){
                            state.result = "I'm iron men, i love you 3000";
                            state.soBanThang++;
                        }else if(state.computer.ma === 'bao'){
                            state.result = 'You Lose !'
                        }else{
                            state.result = 'Match has been drawn !'
                        }
                        break;
                    case 'bao':
                        if(state.computer.ma === 'keo'){
                            state.result = 'You Lose !'
                        }else if(state.computer.ma === 'bao'){
                             state.result = 'Match has been drawn !'
                        }else{
                             state.result = "I'm iron men, i love you 3000";
                             state.soBanThang++;
                        }
                        break;
                    default:
                        break;
                }
                state.tongBanChoi += 1;
                return {...state};
        default:
            return state;
    }
}
export default GameOnline