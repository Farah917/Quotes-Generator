let QUOTES = [
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. ”",
        author:"― Marilyn Monroe"
    },
    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },    
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”" ,
        author:" ― Robert Frost "
    }
]


function generate_quote() {
    let randomQuote = QUOTES[Math.floor ( Math.random() * QUOTES.length) ];
    document.getElementById('generate').innerHTML = `
      <p class="fs-4 my-2 text-secondary">${randomQuote.quote}</p>
      <p class="fs-4 my-2 text-success ">${randomQuote.author}</p>
    `;
}

