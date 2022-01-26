import React from "react";
import logo from './logo.svg';
import './App.css';
import users from './users.json';
import UserInfo from './components/UserInfo';

class App extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				{users.map((user) => {
					return (
						<div>
              <UserInfo
                name = {user.name}
                email = {user.email}
                website = {user.website}
              ></UserInfo>
            </div>
					);
				})}
			</div>
		);
	}
}

export default App;
