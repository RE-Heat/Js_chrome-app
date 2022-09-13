const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "『Nelson Mandela』",
  },
  {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "『Thomas A. Edison』",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "『Benjamin Franklin』",
  },
  {
    quote:
      "There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
    author: "『Andrew Carnegie』",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "『Martin Luther King Jr.』",
  },
  {
    quote: "The only thing worse than starting something and failing … is not starting something.",
    author: "『Seth Godin』",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "『Albert Einstein』",
  },
  {
    quote: "By nature, men are nearly alike. by practice, they get to be wide apart.",
    author: "『Confucius』",
  },
  {
    quote: "life is not fair get used to it.",
    author: "『Bill Gates』",
  },
  {
    quote: "You cannot change what you are, only what you do.",
    author: "『Philip Pullman』",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
