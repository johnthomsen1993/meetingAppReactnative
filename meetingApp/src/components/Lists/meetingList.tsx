import * as React from "react";
import { Meeting } from "../../Models/meeting";
import { Link } from "react-router-dom";

class MeetingList extends React.Component<any> {
    public createTasks(item:Meeting) {
        return  <Link to={`${'/meeting'}/${item._id}`} key={item._id} ><li >{item.topic}</li></Link>
      }
      public render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        return (
          <ul className="theList">
              {listItems}
          </ul>
        );
      }
    };
export default MeetingList;
