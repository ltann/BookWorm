import React, {Component} from "react";
import {bw_auth, generateUserDocument} from "../firebase/init.js";
import BookAppMain from "../books/BookAppMain";
import {Router} from "react-chrome-extension-router";
import SignIn from "./SignIn";
import {populatePortfolioHomepage} from "../firebase/firestore/db_functions";

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			books: []
		};
	}

	componentDidMount = async () => {
		await bw_auth.onAuthStateChanged(async user => {
			if (user) {//if it exists, grab user bookData from the database into app

				await populatePortfolioHomepage(user.uid)
					.then(async books => {
						//console.log(books)
						this.setState({
							user: await generateUserDocument(user),
							books: [...books]
						})
					}, e => console.log(e))
			}

		})
	};

	render() {
		return (
			this.state.user ?
				<div className="users_portfolio_homepage">
					<BookAppMain user={this.state.user} books={this.state.books}/>
					<button className='signoutbutton' onClick={() => {
						bw_auth.signOut().then(() => {
								this.setState({
									user: null
								})
							},
							onRejected => {
								//console.log("log out unsuccessful")
								//console.log(onRejected)
							}
						)
					}}>
						<p className="topbutton">Sign Out</p>
					</button>
				</div>
				:
				<Router>
					<SignIn/>
				</Router>

		);
	}

}

export default User;
