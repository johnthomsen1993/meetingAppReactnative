import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Meeting } from "../../Models/meeting";
import * as actions from "../../ReduxStore/Actions/simpleAction";
import ParticipantList from "../Lists/participantList";
export function mapStateToProps() {
  return {
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MeetingActions>) {
  return {
    onDateChanged: (date: React.FormEvent<HTMLInputElement>) =>
      dispatch(actions.changeMeetingDate(date)),
      onSubmit: (meeting: Meeting) => dispatch(actions.CreateNewMeeting(meeting))
  };
}
type MeetingProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

interface state{
  topic: string;
  date: string;
  participant: string;
  participants: string[];
}

class EditAndCreateMeetings extends React.Component<MeetingProps,state> {


  constructor(props: MeetingProps) {
    super(props);
    this.state = {
      topic: "",
      date: "",
      participant: "",
      participants: []
    };
  }
  public addPatricipant = () => {
    if (this.state.participant !== "") {
      this.setState({
        participants: [...this.state.participants, this.state.participant],
        participant: ""
      });
    }
  };

  public submit() {
    const meeting: Meeting = {
      date: new Date(this.state.date),
      participants: this.state.participants,
      topic: this.state.topic
    };
    if (this.props.onSubmit !== undefined) {
      this.props.onSubmit(meeting);
    }
  }
  public render() {
    return (
      <div>
        <div>New meeting</div>
        <div>
          <div>
            <label>Topic:</label>
            <input
              type="text"
              name="topic"
              value={this.state.topic}
              placeholder="Give your meeting a title."
              onChange={e =>
                this.setState({ topic: e.currentTarget.value })
              }
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              onChange={e =>
                this.setState({ date: e.currentTarget.value })
              }
            />
          </div>
          <div>
            <label>participant:</label>
            <input
              type="text"
              name="participant"
              value={this.state.participant}
              onChange={e =>
                this.setState({ participant: e.currentTarget.value })
              }
            />
            <button
              className="btn btn-primary"
              onClick={e=>this.addPatricipant()}
            >
              add
            </button>
          </div>
          <div>
            <ParticipantList entries={this.state.participants} />
          </div>
          <button
            className="btn btn-primary"
            onClick={e => this.submit()}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAndCreateMeetings);
