import React, { Fragment } from 'react';
import NavBar from '../NavBar';
import Modal from '../Modal'

const Layout = props => {
	return (
		<Fragment>
			<NavBar />
			<div className='container '>
				{props.children}
			</div>
			<Modal />
		</Fragment>
	);
};

export default Layout
