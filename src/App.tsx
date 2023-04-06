import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
	const [githubUser, setGithubUser] = useState(null);
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (githubUser) {
			fetch(`https://api.github.com/users/${githubUser}`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					throw new Error('User not found');
				})
				.then((data) => {
					setUserData(data);
					setError(null);
				})
				.catch((error) => {
					setUserData(null);
					setError(error.message);
				});
		}
	}, [githubUser]);

	const handleSearch = (username) => {
		setGithubUser(username);
	};
	return (
		<div className="bg-slate-800 text-gray-400 py-8">
			<div className="flex flex-col items-center h-screen max-w-3xl m-auto px-8">
				<Header />
				<SearchBar onSearch={handleSearch} />
				{userData && <Profile data={userData} />}
			</div>
		</div>
	);
}

export default App;
