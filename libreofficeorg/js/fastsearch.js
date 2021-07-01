var index = new FlexSearch.Document({ document: {
        index: ['title','permalink','contents'],
        store: ['title','permalink','contents']
    }
});
var list = document.getElementById('searchResults'); // targets the <ul>
var first = list.firstChild; // first child of search list
var last = list.lastChild; // last child of search list
var maininput = document.getElementById('searchInput'); // input box for search
var resultsAvailable = false; // Did we get any search results?

loadSearch(); // loads our json data and builds flexsearch.js search index

function getMatch(needle, haystack) {
    if (!needle || !haystack) {
        return false;
    }
    else {
        var re = new RegExp('((\\S+[\\b\\s]?)' + needle + '([\\b\\s]?\\S+))', 'i'),
            matches = haystack.match(re);
        if (matches) {
            var foundWords = haystack.match(re)[0].split(/\s+/),
                foundFragment = foundWords.join(' ');
            return foundFragment;
        }
        else {
            return -1;
        }
    }
}

// ==========================================
// execute search as each character is typed
//
document.getElementById("searchInput").onkeyup = function(e) {
  executeSearch(this.value);
}

function fetchJSONFile(path, callback) {
    fetch(path)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(function(data) {
        if (callback) callback(data);
    }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ', error.message);
    });
};

// ==========================================
// load our search index, only executed once
// on first call of search box (CMD-/)
//
function loadSearch() {
  fetchJSONFile('/index.json', function(data){
    data.forEach((el, i) => {
        index.add(i, el);
    });
  });
}

// ==========================================
// using the index we loaded on CMD-/, run
// a search query (for "term") every time a letter is typed
// in the search box
//
function executeSearch(term) {
  let results = index.search(term, { pluck: "contents", enrich: true });
  let searchitems = ''; // our results bucket

  if (results.length === 0) { // no results based on what was typed into the input box
    resultsAvailable = false;
    searchitems = '';
  } else { // build our html
    for (let item in results.slice(0,5)) { // only show first 5 results
        let snippet = getMatch(term, results[item].doc.contents);
        searchitems = searchitems + '<li><a href="' + results[item].doc.permalink + '" tabindex="0">' + '<span class="title">' + results[item].doc.title + '</span><br /><span>"... ' + snippet + ' ..."</span></a></li>';
    }
    resultsAvailable = true;
  }

  document.getElementById("searchResults").innerHTML = searchitems;
  if (results.length > 0) {
    first = list.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
    last = list.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
  }
}
