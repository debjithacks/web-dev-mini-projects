const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

// https://www.shopify.com/blog/motivational-quotes
const arrayOfQuotes = [
  {
    author: "Lord Krishna",
    quote:
      "The mind acts like an enemy for those who do not control it.",
  },
  {
    author: "Albert Einstein",
    quote:
      "We cannot solve problems with the kind of thinking we employed when we came up with them",
  },
  {
    author: " Mark Twain",
    quote:
      "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
  },
  {
    author: "Eleanor",
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
  },
  {
    author: "Norman Vincent Peale",
    quote: "When you change your thoughts, remember to also change your world.",
  },
  {
    author: "Walter",
    quote:
      "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. ",
  },
  {
    author: "Diane McLaren",
    quote:
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
  },
  {
    author: "Dale Carnegie",
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  },
  {
    author: "AI",
    quote:
      "Your attitude determines your direction.",
  },
  {
    author: "AI",
    quote:
      "Behind every tear is a story untold.",
  },
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}
