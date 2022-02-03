export const RATINGS = [
	'2 points per birb',
	'Damn! Back at it again with the good birb! 7 points',
	'6 points awarded',
	'Nice birb, 7 points',
	'Beautiful',
	'13/10 Great plumage',
	'Much feathers. So wow. 9 points',
	'Common birb, 3 points',
	'Ruffled my feathers. 9 points',
	'Shake those tail feathers for 4 points',
	'Bird-like government drone. 2 points',
	'This birb is golden. 8 points',
	'0/10 Not even my dog would like this one',
	"12 points. You're just robin points now",
	'May be realted to a parrot-billed puffin, 7 points',
	'Silly goose only 3 points',
	'Common birb. 3 points',
	'Chirp chirp. 5 points',
	'Squaking in at 5 points',
	"You're a common Loon for submitting this. 2 points"
];

export function rollRating() {
	return RATINGS[Math.floor((Math.random() * 1000) % RATINGS.length)];
}
