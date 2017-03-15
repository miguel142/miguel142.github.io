var quotes=[
    'this is the first quote',
    'this is the second quote',
    'this is the third quote'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
