import React, { Fragment } from 'react';
import NavBar from '../NavBar';

const Layout = props => {
	return (
		<Fragment>
			<NavBar />
			<div className='container '>
				{props.children}
			</div>
		</Fragment>
	);
};

export default Layout
