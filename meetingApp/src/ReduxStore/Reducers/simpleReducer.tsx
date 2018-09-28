import { MeetingActions } from "../Actions/simpleAction";
import * as constants from "../Constants/constants";
import { MeetingStoreState } from "../types/meeting";

export function reducer(
  state: MeetingStoreState,
  action: MeetingActions
): MeetingStoreState {
  switch (action.type) {
    case constants.CHANGE_DATE: {
      return state;
    }
    case constants.CREATE_NEW_MEETING:{
      return {...state, meetings: [...state.meetings, action.meeting]}
    }
    case constants.LIST_MEETINGS:{
      return {...state, meetings:action.meetings}
    }
    case constants.GET_MEETING:{
      return {...state, meeting:action.meeting}
    }
    default: {
      return state;
    }
  }
}
