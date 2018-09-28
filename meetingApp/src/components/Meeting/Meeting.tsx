import * as React from "react";
import { Dispatch } from "redux";
import { MeetingStoreState } from "../../ReduxStore/types/meeting";
import * as actions from "../../ReduxStore/Actions/simpleAction";
import { connect } from "react-redux";

type MeetingsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  any;
export function mapStateToProps({ meeting }: MeetingStoreState) {
  return {
    meeting
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MeetingActions>) {
  return {
    GetMeeting: async (id: string) =>
      await dispatch(await actions.GetMeeting(id))
  };
}

class MeetingComp extends React.Component<MeetingsProps> {
  constructor(props: MeetingsProps) {
    super(props);
  }
  public componentDidMount() {
    this.props.GetMeeting(this.props.match.params.id);
  }
  public render() {
    return <div>{this.props.meeting.topic}</div>;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingComp);
