import {configureStore, createSlice} from '@reduxjs/toolkit'

const fetchSlice =createSlice({
    name:'Data',
    initialState:{
        data_array:[{inputLink:"www.facebook.com",returnLink: "https://rtksx"}],
        input:"",
        display:null,
        text_color:'white',
        error_text:'please add a link'
    },
    reducers:{
        addArray(state,action){
            return{
                ...state,
                data_array:[...state.data_array,action.payload]
            }
        },
        Value(state,action){
            return{
                ...state,
                data_value:action.payload
            }
        },
        changeInput(state,action){
            return{
                ...state,
                input:action.payload
            }
        },
        changeDisplay(state,action){
            return{
                ...state,
                display:action.payload
            }

        },
        changeTextColor(state,action){
            return{
                ...state,
                text_color:action.payload
            }
        },
        changeTextData(state,action){
             return{
                 ...state,
                error_text:action.payload
            }
            
        }
    }
})
export const fetching = fetchSlice.actions

const store = configureStore({
    reducer:{
        Data:fetchSlice.reducer
    }
})

export default store;