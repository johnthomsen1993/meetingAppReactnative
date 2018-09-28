import * as React from "react";

class ParticipantList extends React.Component<any> {
    public createTasks(item) {
        return <li key={item.key}>{item}</li>
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
export default ParticipantList;
