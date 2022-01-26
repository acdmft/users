import React from "react";

class UserInfo extends React.Component {
    render() {
        return (
        <>
            <p>{this.props.name}</p>
            <p>{this.props.email}</p>
            <p>{this.props.website}</p>
        </>
        )
    }
}

export default UserInfo;