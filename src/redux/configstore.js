import { combineReducers, createStore } from "redux";
const initialState = {
    danhSachghedadat : [
       
    ]
}
const rootReducer = combineReducers({
    datVexemphim(state = initialState, action ){
        switch (action.type) {
            case "GHE_DAT":
                let danhSachghedat =[...state.danhSachghedadat]
                console.log(danhSachghedat);
                let index= danhSachghedat.findIndex((ghedat) => { 
                    return ghedat.soGhe == action.gheDat.soGhe
                })
                if (index >-1) {
                    danhSachghedat.splice(index,1)
                }else{
                    danhSachghedat =[...danhSachghedat,action.gheDat]
                }
               state.danhSachghedadat=danhSachghedat
             
               return {...state}
               case "XOA_GHE":
                let danhSachghedat1 =[...state.danhSachghedadat]
                let indexx= danhSachghedat1.findIndex((ghedat) => { 
                    return ghedat.soGhe == action.soghe
                })
                if (indexx > -1) {
                    danhSachghedat1.splice(indexx,1)
                }
                state.danhSachghedadat=danhSachghedat1
                return {...state}
            default:
                return state;
        }
    },
})
export const store = createStore(rootReducer);
