import React from 'react';
import Search from './components/Search';
import Matches from './components/Matches';
import Table from './components/Table';

const App = () => (
	<div className="App">
		<h1 className="App__title">Search</h1>
		<Search />
		<Matches />
		<Table />
	</div>
);

export default App;
