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

  // add an eventlistener to the #search
  //    on every keyup, fire function updateSearchResults
  // updateSearchResult
  //    var results = [];
  //    (1) gets the letters submitted into the text field
  //    (2) check each word in the dictionary for the letters
  //    (3) store the matching words into a results array
  //    (4) find the #search-results div
  //      (5) loop through results array and create a new div

  var searchBar = document.getElementById('search');
  searchBar.addEventListener('keyup', function(e) {
    searchBar.childNodes[0] = [];

  });
};