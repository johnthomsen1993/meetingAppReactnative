import {  createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './Reducers/simpleReducer';
import { MeetingStoreState } from './types/meeting';
import { MeetingActions } from './Actions/simpleAction';
import { Meeting } from '../Models/meeting';
export default function configureStore() {
 // tslint:disable-next-line:no-any
 return createStore<MeetingStoreState,MeetingActions,any,any>(
  reducer,{
      meeting:new Meeting,
      meetings:[]
  },composeWithDevTools()
 );
}