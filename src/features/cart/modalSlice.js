import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    modalOn: false,
};
const modalSLice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        switchModal: (state)=>{
            state.modalOn=!state.modalOn;
        }

    }
})

export const {switchModal} = modalSLice.actions;
export default modalSLice.reducer;