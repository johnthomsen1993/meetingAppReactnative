import * as React from "react";
import MeetingList from "../Lists/meetingList";
import { MeetingStoreState } from "../../ReduxStore/types/meeting";
import { Dispatch } from "redux";
import * as actions from "../../ReduxStore/Actions/simpleAction";
import { connect } from "react-redux";

type MeetingsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export function mapStateToProps({ meetings }: MeetingStoreState) {
  return {
    meetings
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MeetingActions>) {
  return {
    listMeetings: async () => await dispatch(await actions.ListMeetings())
  };
}

class Meetings extends React.Component<MeetingsProps> {
  constructor(props: MeetingsProps) {
    super(props);
  }

  public async componentDidMount() {
     this.props.listMeetings();
  }

  public render() {
    return (
      <div>
        <MeetingList entries={this.props.meetings} />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetings);
