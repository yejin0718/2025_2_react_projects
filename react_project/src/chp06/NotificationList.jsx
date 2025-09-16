import React from "react";

const reservedNotifications=[
    {
        id: 1,
        message: "test1"
    },
    {
        id: 2,
        message: "test2"
    },
    {
        id: 3,
        message: "test3"
    }
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div>

            </div>
        );
    }
}

export default NotificationList;