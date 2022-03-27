import {createStore} from 'redux';
const initialState={
    navBar:false,
    time:0
}
export function toggle(){
    return {
        type:"TOGGLE"
    }
}
function reducer(state=initialState,action){
    switch (action.type){
        case "TOGGLE":
            return {
                navBar:!state.navBar,
                time:state.navBar?0:500
            }
        default:
            return state;
    }
}
const store=createStore(reducer);

export default store;