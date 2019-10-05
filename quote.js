window.onload = function(){
  $(document).ready(function(){
    $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',function(json){
      if(typeof json === 'string'){
        json = JSON.parse(json)
      }
      $("#new-quote").on("click",function(){
        var rn = Math.floor(Math.random()*json.quotes.length);
        var quoteData = json.quotes[rn];
        $("#quote").html(quoteData.quote);
        var author = '<h4><strong>'+quoteData.author+'</h4>';
        $("#author").html(author);
      });
      $('#tweet-quote').click(function() {
      window.open('https://twitter.com/intent/tweet?text=' + $("#quote").html() + " - " + $("#author").text());
      });
    });
  });
}
