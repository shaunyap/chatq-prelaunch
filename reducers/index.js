let defaultState={
    referralCount:0,
    freeMonths: 1
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="UPDATE_REFERRAL_COUNT"){
        return{
            ...state,
            referralCount:action.referralCount,
            freeMonths: action.freeMonths
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;
