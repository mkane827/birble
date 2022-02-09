export const RATINGS = [
	{
		description: '2 points per birb',
		points: 2
	},
	{
		description: 'Damn! Back at it again with the good birb! 7 points',
		points: 7
	},
	{
		description: '6 points awarded',
		points: 6
	},
	{
		description: 'Nice birb, 7 points',
		points: 7
	},
	{
		description: 'Beautiful! 5 points',
		points: 5
	},
	{
		description: '13/10 Great plumage',
		points: 13
	},
	{
		description: 'Much feathers. So wow. 9 points',
		points: 9
	},
	{
		description: 'Common birb, 3 points',
		points: 3
	},
	{
		description: 'Ruffled my feathers. 9 points',
		points: 9
	},
	{
		description: 'Shake those tail feathers for 4 points',
		points: 4
	},
	{
		description: 'Bird-like government drone. 2 points',
		points: 2
	},
	{
		description: 'This birb is golden. 8 points',
		points: 8
	},
	{
		description: '0/10 Not even my dog would like this one',
		points: 0
	},
	{
		description: "12 points. You're just robin points now",
		points: 12
	},
	{
		description: 'May be realted to a parrot-billed puffin, 7 points',
		points: 7
	},
	{
		description: 'Silly goose only 3 points',
		points: 3
	},
	{
		description: 'Common birb. 3 points',
		points: 3
	},
	{
		description: 'Chirp chirp. 5 points',
		points: 5
	},
	{
		description: 'Squaking in at 5 points',
		points: 5
	},
	{
		description: "You're a common Loon for submitting this. 2 points",
		points: 2
	}
];

export function rollRating() {
	return RATINGS[Math.floor((Math.random() * 1000) % RATINGS.length)];
}
