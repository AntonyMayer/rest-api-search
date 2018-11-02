import React from 'react';
import Search from './components/Search';
import Matches from './components/Matches';
import Table from './components/Table';
import Navigation from './components/Navigation';

const App = () => (
	<div className="App">
		<h1 className="App__title">Search</h1>
		<Search />
		<Matches />
		<Table />
		<Navigation />
	</div>
);

export default App;
