import React from 'react';
import Table from './components/Table';
import Search from './components/Search';

const App = () => (
	<div className="App">
		<h1 className="App__title">Search</h1>
		<Search />
		<Table />
	</div>
);

export default App;
