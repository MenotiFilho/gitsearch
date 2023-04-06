import {
	BriefcaseIcon,
	LinkIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

interface Props {
	data: {
		login: string;
		name: string;
		username: string;
		avatar_url: string;
		created_at: string;
		html_url?: string;
		bio?: string;
		location?: string;
		blog?: string;
		twitter_username?: string;
		company?: string;
		followers: number;
		following: number;
		public_repos: number;
	} | null;
}

const Profile: React.FC<Props> = ({ data }) => {
	return (
		<div className="flex bg-slate-600 mt-4 rounded-lg p-7 w-full gap-8">
			<img
				src={data?.avatar_url}
				alt={`${data?.username}'s avatar`}
				className="flex rounded-full h-24"
			/>
			<div className="flex flex-col flex-grow">
				<div className="flex justify-between items-center">
					<p className="font-semibold text-3xl">{data?.name}</p>
					<p className="font-normal text-sm">
						Joined at {data?.created_at.slice(0, -10)}
					</p>
				</div>
				<a
					className="font-light text-xs mt-2 self-start text-blue-500"
					href={data?.html_url}
				>
					@{data?.login}
				</a>
				{data?.bio && <p className="font-normal text-base mt-6">{data?.bio}</p>}
				<div className="bg-slate-800 rounded-2xl p-4 px-14 flex justify-between mt-6">
					<div>
						<p className="font-normal text-lg">Repos</p>
						<p className="font-semibold text-2xl">{data?.public_repos}</p>
					</div>
					<div>
						<p className="font-normal text-lg">Followers</p>
						<p className="font-semibold text-2xl">{data?.followers}</p>
					</div>
					<div>
						<p className="font-normal text-lg">Following</p>
						<p className="font-semibold text-2xl">{data?.following}</p>
					</div>
				</div>
				<div className="mt-6">
					<div className="grid grid-cols-2 gap-y-6 m-auto items-start">
						{data?.location && (
							<div className="flex gap-2 items-center ">
								<MapPinIcon className="h-6 w-6 text-gray-500" />
								<p>{data?.location}</p>
							</div>
						)}
						{data?.blog && (
							<div className="flex gap-2 items-center ">
								<LinkIcon className="h-6 w-6 text-gray-500" />
								<a
									href={data?.blog}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline w-10"
								>
									{data?.blog}
								</a>
							</div>
						)}
						{data?.twitter_username && (
							<div className="flex gap-2 items-center ">
								<LinkIcon className="h-6 w-6 text-gray-500" />
								<a
									href={`https://twitter.com/${data?.twitter_username}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									@{data?.twitter_username}
								</a>
							</div>
						)}
						{data?.company && (
							<div className="flex gap-2 items-center ">
								<BriefcaseIcon className="h-6 w-6 text-gray-500" />
								<p className="w-16">{data?.company}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
