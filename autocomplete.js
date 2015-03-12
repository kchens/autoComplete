window.onload = function() {
  var dictionary = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

  var searchBar = document.getElementById('search');

  var getSearchTerm = function() {
    var searchTerm = event.target.value;
    console.log(searchTerm);
    return searchTerm;
  };

  var updateSearchResults = function(searchTerm) {
    var regexTerm;
    var results = [];

    regexTerm = new RegExp('^' + searchTerm, 'i');
    dictionary.forEach(function(word) {
      if (regexTerm.test(word) && !(searchTerm == '')) {
        results.push(word);
      };
    });
    return results;
  };

  var removeChildNodes = function(divSearchResults){
    while (divSearchResults.hasChildNodes()) {
      divSearchResults.removeChild(divSearchResults.lastChild);
    }
  }

  var createMatchedWord = function(matchedWord, divSearchResults) {
    var matchedWordInput = document.createElement('input');

    matchedWordInput.setAttribute('disabled', 'disabled');
    matchedWordInput.setAttribute('class', 'matched-word');
    matchedWordInput.setAttribute('value', matchedWord);

    divSearchResults.appendChild(matchedWordInput);
  }

  var addUpdatedSearchResults = function() {
    var divSearchResults = document.getElementById('search-results');
    removeChildNodes(divSearchResults);

    var searchTerm = getSearchTerm();
    var searchResults = updateSearchResults(searchTerm);

    searchResults.forEach(function(result, index, array) {
      createMatchedWord(result, divSearchResults);
    });
  }

  searchBar.addEventListener('keyup', addUpdatedSearchResults, false);
};
