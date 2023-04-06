import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline';

function Header() {
	return (
		<div className="flex justify-between w-full">
			<h1 className="text-3xl">GitSearch</h1>
			<BeakerIcon className="h-9 w-9 " />
		</div>
	);
}

export default Header;
