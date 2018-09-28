import * as constants from "../Constants/constants";
import { Meeting } from "../../Models/meeting";
import auth0Client from "../../auth0/auth";
import axios from "axios";

export interface ChangeMeetingDate {
  type: constants.CHANGE_DATE;
  date: Date;
}

export interface ListMeetings {
  type: constants.LIST_MEETINGS;
  meetings: Meeting[];
}

export interface GetMeeting {
    type: constants.GET_MEETING;
    meeting: Meeting;
  }

export interface CreateNewMeeting {
  type: constants.CREATE_NEW_MEETING;
  meeting: Meeting;
}

export type MeetingActions =
  | ChangeMeetingDate
  | CreateNewMeeting
  | ListMeetings
  | GetMeeting;

export function changeMeetingDate(
  inputEvent: React.FormEvent<HTMLInputElement>
): ChangeMeetingDate {
  return {
    type: constants.CHANGE_DATE,
    date: new Date(inputEvent.currentTarget.value)
  };
}

export function CreateNewMeeting(inputMeeting: Meeting): CreateNewMeeting {
  axios.post("http://localhost:53775/api/meeting", inputMeeting, {
    headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
  });
  return { type: constants.CREATE_NEW_MEETING, meeting: inputMeeting };
}

export async function ListMeetings(): Promise<ListMeetings> {
  let t = axios
    .get<Meeting[]>("http://localhost:53775/api/meeting", {
      headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
    })
    .then(result => {
      let res: ListMeetings = {
        type: constants.LIST_MEETINGS,
        meetings: result.data
      };
      return res;
    });
  return t;
}
export async function GetMeeting(id:string): Promise<GetMeeting> {
    const url ="http://localhost:53775/api/meeting/"+id;
    let t = axios
      .get<Meeting>(url, {
        headers: { Authorization: `Bearer ${auth0Client.getAccessToken()}` }
      })
      .then(result => {
        let res: GetMeeting = {
          type: constants.GET_MEETING,
          meeting: result.data
        };
        return res;
      });
    return t;
  }
