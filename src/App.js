import React from "react";
import logo from './logo.svg';
import './App.css';
import users from './users.json';

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
							<p>{user.name}</p>
							<p>{user.email}</p>
              <p>{user.website}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
