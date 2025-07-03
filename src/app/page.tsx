const gallery = [
	{
		id: 1,
		title: "Under the sea",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvF5ni01Gfo7aiKwnLOcmMSWPFE265hpvqgbUtN",
	},
	{
		id: 2,
		title: "Let your light shine",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFWSZKXsfA4HinzS7bhgvlLN58jRqMtVpsIoDQ",
	},
	{
		id: 3,
		title: "Lake of shining waters",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFBcVsGbFsw5tHI3TOQukCzgXncrxfyRD4V2q8",
	},
	{
		id: 4,
		title: "Where there is grass, there is snake",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvF8LFxovsWYg0UcXjwDVRblxOG5paIkeQAs247",
	},
	{
		id: 5,
		title: "Queen",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvF28eUQ8DLap3NfTWvJbY6EqBDos5SgVIn9XQA",
	},
	{
		id: 6,
		title: "Princess",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFrlrmHj5Cba3ez1OJlxGcEn05mwYKs6Fv9ZAH",
	},
	{
		id: 7,
		title: "Couple",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFfESXpaCI2vRorFKBkaqSixbwePJDlYAyUuZX",
	},
	{
		id: 8,
		title: "Mother",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvF0hCarOQJ8tCSRk6TqypuAg01IsFQdmiGcBLn",
	},
	{
		id: 9,
		title: "Student",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFe8KlVdPWlL4uAhgy3oFI7vcpDSGQqzbCOftm",
	},
	{
		id: 10,
		title: "Hero",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFDw98ayR3dRAK7slZxQEuwrNiGJzYeXo26FcS",
	},
	{
		id: 11,
		title: "Villain",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFQZheAMrvtp2RLXGKAYTBHgJa5z46ejZVoOfM",
	},
	{
		id: 12,
		title: "Tardis Temple",
		image: "https://3rrbtltbgz.ufs.sh/f/h3q3HkcV1LvFNOoeCOusQVY3TLo7EjZfAnb6dH594CGB2Mik",
	},
	
];

export default function HomePage() {
	return (
		<main className="">
			<div className="flex flex-wrap">
				{gallery.map((item) => (
					<div key={item.id} className="w-1/3">
						<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
					</div>
				))}
			</div>
		</main>
	);
}
