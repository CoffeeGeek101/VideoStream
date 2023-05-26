import {call,put,all,takeLatest} from 'redux-saga/effects';
import api from '../api/api';
import { fetchVideosFailure, fetchVideosStart, fetchVideosSuccess } from '../redux/VideoSlice';

const videoapi = new api();

function* getVideoList(action : any){
    try{
        yield put(fetchVideosSuccess(yield call(videoapi.getVideos, action.payload)))
    }catch(e){
        yield put(fetchVideosFailure());
    }
}

export default function* watcherSaga(){
    yield all([
        takeLatest(fetchVideosStart.type, getVideoList)
    ])
}
