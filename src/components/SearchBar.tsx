import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};
	return (
		<div className="w-full mt-8 flex justify-center items-center">
			<input
				className="outline-none bg-slate-600 font-semibold rounded-l-lg w-full h-10 p-5"
				type="search"
				name="search"
				id="search"
				placeholder="Search Git User"
				value={searchTerm}
				onChange={handleInputChange}
				onKeyDown={handleKeyPress}
			/>
			<button
				className="w-10 rounded-r-lg h-10 bg-slate-600 flex items-center"
				onClick={handleSearch}
			>
				<MagnifyingGlassIcon className="h-7 w-7 text-gray-500" />
			</button>
		</div>
	);
}

export default SearchBar;
