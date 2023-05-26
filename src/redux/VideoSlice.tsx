import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type page = string | number;

export interface Video {
    postId : string;
    creator : {
        name : string;
        id : string;
        handle : string;
        pic : string
    };
    submission : {
        title : string;
        description : string;
        mediaUrl : string;
        thumbnail : string;
        placeholderUrl : string;
    };
}

interface InitialState {
    isFetching: boolean;
    videos: Video[];
    error: any;
    isLoading : boolean;
}

const initialState : InitialState = {
    isFetching: false,
    videos: [],
    error: null,
    isLoading : false
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        fetchVideosStart: (state, action : PayloadAction<page>) => {
            return{
                ...state,
                isFetching: true,
                videos: state.videos,
                error: null,
                isLoading : true,
                page : action.payload
            }
        },
        fetchVideosSuccess: (state, action : PayloadAction<{posts : Video[], page : number, offset : number}>) => {
            return{
                ...state,
                isFetching: false,
                videos: state.videos.concat(action.payload.posts),
                isLoading : false,
                error: null
            }
        },
        fetchVideosFailure: (state) => {
            return{
                ...state,
                isFetching: false,
                videos: [],
                isLoading : false,
                error: true
            }
        }
    }
});

export const { fetchVideosStart, fetchVideosSuccess, fetchVideosFailure } = videoSlice.actions;
export default videoSlice.reducer;
