import React, { Component } from "react";
import NotificationsService from '../services/NotificationsService';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: -1
    };
  }

  async componentDidMount() {
    const { count } = await NotificationsService.getNotifications();
    this.setState({ count });
  }

  render() {
    return (
      <section>
        <div className="notifications">
          {this.state.count !== -1 ? `${this.state.count} Notifications Awaiting!` : "Loading..."}
        </div>
      </section>
    );
  }
}
