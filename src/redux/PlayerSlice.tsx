import { createSlice } from "@reduxjs/toolkit";
import { Video } from "./VideoSlice";

interface PlayerState {
    isOpen : boolean;
    video : Video | null;
}

const initialState : PlayerState = {
    isOpen : false,
    video : null,
}

const playerSlice = createSlice({
    name : 'player',
    initialState,
    reducers : {
        openPlayer : (state, action) => {
            return {
                ...state,
                isOpen : true,
                video : action.payload
            }
        },
        closePlayer : (state) => {
            return {
                ...state,
                isOpen : false
            }
        }
    }
});

export const {closePlayer,openPlayer} = playerSlice.actions;
export default playerSlice.reducer;