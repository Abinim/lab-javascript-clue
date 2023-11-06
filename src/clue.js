// ITERATION 1

// Suspects Array
const suspectsArray = [
  {
    firstName: 'Elon',
    lastName: 'Musk',
    occupation: 'Businessman',
    age: 52,
    description:
      'Elon Reeve Musk is a businessman and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner,',
    image: 'musk.png',
    color: 'blue',
  },
  {
    firstName: 'Sandeep',
    lastName: 'Lamichhane',
    occupation: 'Cricketer',
    age: 23,
    description:
      'Sandeep Lamichhane is a Nepalese cricketer and former captain of the Nepal national cricket team. A right-arm leg spin bowler, Lamichhane has played for Twenty20 franchise sides across the world.',
    image: 'lamichhane.png',
    color: 'white',
  },
  {
    firstName: 'Bill',
    lastName: 'Gates',
    occupation: 'American Businessman',
    age: 68,
    description:
      'William Henry Gates III is an American businessman, investor, philanthropist, and writer best known for co-founding the software giant Microsoft, along with his childhood friend Paul Allen',
    image: 'gates.png',
    color: 'white',
  },
  {
    firstName: 'Binod',
    lastName: 'Binod Chaudhary',
    occupation: 'Nepalese Businessman',
    age: 68,
    description:
      'Binod Chaudhary is a Nepalese billionaire businessman, politician and philanthropist. He is the chairman and president of the Chaudhary Group. In February 2013, he was recognised as Nepal`s wealthiest person and only billionaire, having an estimated net worth of $1 billion.',
    image: 'chaudhary.png',
    color: 'Blue',
  },
  {
    firstName: 'Tom',
    lastName: 'Cruis',
    occupation: 'Actor',
    age: 61,
    description:
      "Thomas Cruise Mapother IV, known professionally as Tom Cruise, is an American actor. One of the world's highest-paid actors, he has received various accolades, including an Honorary Palme d'Or and three Golden Globe Awards, in addition to nominations for four Academy Awards.",
    image: 'Cruis.png',
    color: 'green',
  },
  {
    firstName: 'Ronaldo',
    lastName: 'Cristiano',
    occupation: 'Football Player',
    age: 38,
    description:
      'Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team',
    image: 'cristiano.png',
    color: 'white',
  },
];

// Rooms Array
const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: 'Study' },
  { name: 'Library' },
  { name: 'Billiard Room' },
  { name: 'Lounge' },
  { name: 'Ballroom' },
  { name: 'Hall' },
  { name: 'Spa' },
  { name: 'Living Room' },
  { name: 'Observatory' },
  { name: 'Theater' },
  { name: 'Guest House' },
  { name: 'Patio' },
];

// Weapons Array
const weaponsArray = [
  { name: 'hammer', weight: 5 },
  { name: 'knife', weight: 9 },
  { name: 'candlestick', weight: 5 },
  { name: 'dumbbell', weight: 30 },
  { name: 'shears', weight: 0.5 },
  { name: 'axe', weight: 15 },
  { name: 'bat', weight: 13 },
  { name: 'trophy', weight: 25 },
  { name: 'pan', weight: 20 },
];

// ITERATION 2

function selectRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  const mystery = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
  return mystery;
}

// ITERATION 3
function revealMystery(envelope) {
  const { suspect, weapon, room } = envelope;
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}
