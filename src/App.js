import React from 'react';
import Search from './components/Search';
import Counter from './components/Counter';
import Table from './components/Results';
import Navigation from './components/Navigation';

const App = () => (
	<div className='App'>
		<h1 className='App__title'>Search</h1>
		<Search />
		<Counter />
		<Navigation />
		<Table />
		<Navigation />
	</div>
);

export default App;
