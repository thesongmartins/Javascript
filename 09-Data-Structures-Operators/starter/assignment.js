const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
// Array Destructuring.
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [, , thirdBook] = books;
console.log(thirdBook);

// Nested Destructuring
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// Default values
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRating, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRating, threeStarRatings);

// Objects Destructuring
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// Naming Variables
const { keywords: $tags } = books[0];
console.log($tags);

// Default Values
const { language, programmingLanguage = 'Unknown' } = books[6];
console.log(language, programmingLanguage);

// Variable Names
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// Nested Objects destructuring
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);
// Objects as parameters
const printBookInfo = ({ $title, $author, $year }) => {
  console.log(`${$title} by ${$author}, ${$year}`);
};
printBookInfo({
  $title: 'Algorithms',
  $author: 'Robert Sedgewick',
  $year: '2011',
});

// AI Challenges
const person = {
  $name: 'John Doe',
  age: 30,
  city: 'New York',
  occupation: 'Developer',
};

const { $name, age, city } = person;
console.log($name, age, city);

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const [first, , third, , fifth] = colors;
console.log(first, third, fifth);

const user = {
  id: 1,
  $$name: 'Alice',
  skills: ['Javascript', 'React', 'Node.Js'],
  address: {
    $city: 'San Francisco',
    state: 'CA',
    country: 'USA',
  },
};

const {
  $$name,
  skills: [$first],
  address: { $city },
} = user;
console.log($$name, $first, $city);

const config = {
  server: 'localhost',
  port: 3000,
};

const { server, port, timeout = 5000, retries = 3 } = config;
console.log(server, port, timeout, retries);

const numbers = [1, 2, 3, 4, 5, 6];
const product = {
  $id: 'Prod-123',
  $title: 'Laptop',
  price: 999.99,
  inStock: true,
};
const [$firstt, second, ...others] = numbers;
console.log($firstt, second, others);
const { $id: ProductId, $title: ProductName } = product;
console.log(ProductId, ProductName);

const formatUser = ({ $namee, email, role = user }) =>
  `${$namee} (${role} - ${email})`;

const user1 = { $namee: 'John', email: 'john@example.com', role: 'admin' };
const user2 = { $namee: 'Jane', email: 'jane@example.com' };
console.log(formatUser(user1));
console.log(formatUser(user2));

// Spread Operators
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = str => console.log(...str);
spellWord('Javascript');

// Rest Patterns & Parameters
// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

// 4.3
const printBookAuthorsCount = (title, ...authors) => {
  console.log(`The book ${title} has ${authors.length} authors`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short Circuiting && ||
// 5.1
const hasExamplesInJava = book =>
  book.programmingLanguage === 'Java' || 'No data available';
console.log(hasExamplesInJava(books[0]));

// 5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provides online content`);
}

// Nullish Coalescing Operator
// 6.1
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content`);
}

// Logical Assignment Operators
// 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  console.log(books[i].edition);
}

// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  console.log(books[i].highlighted);
}

// Coding Challenge #
const football = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const players1 = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];

const players2 = [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
];
// 2)
const [neuer, ...fieldPlayers] = players1;
console.log(neuer, fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)
const { team1, x: draw, team2 } = football.odds;
console.log(team1, draw, team2);

// 6)
const printGoals = (...players) => {
  console.log(` ${players.length} goals were scored`);
};
printGoals('Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels');

// 7)
const likelyWIn =
  (football.odds.team1 > football.odds.team2 && football.odds.team1) ||
  football.odds.team2;
console.log(`${likelyWIn} is likely to win`);

// Looping arrays: for..of loops
//  1)
let pageSum = 0;
for (const book of books) {
  pageSum = pageSum + book.pages;
}
console.log(pageSum);

// 2)
const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
    console.log(allAuthors);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
      console.log(allAuthors);
    }
  }
}

// 3
for (const [index, author] of allAuthors.entries())
  console.log(`${index + 1}. ${author}`);

// Enhanced Object Literals
// 1)
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  // ...
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// 2)
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  // ...
  pages,
};
console.log(newBook2);

// Optional Chaining
const getFirstKeyword = book => {
  return book.keywords?.[0];
};
// getFirstKeyword(book[0]);
getFirstKeyword(newBook2); // from previous tasks

// Looping objects: keys, values & entries
for (const [i, player] of football.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(football.odds);
console.log(odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
console.log(average);
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(football.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${football[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of football.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
