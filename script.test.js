const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple 🍎",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry 🫐",
  "Boysenberry",
  "Currant",
  "Cherry 🍒",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape 🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon 🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon 🍈",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange 🍊",
  "Clementine 🍊",
  "Mandarine 🍊",
  "Tangerine 🍊",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple 🍍",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry 🍓",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// 1      TODO  this is going to select the matching elements out of the fruit array and return it in the array called "results"
//any fruit that contains the string in the search bar is shown in the list

function search(str) {
  console.log("1");
  let results = []; // start with 'results' as an new array
  results = fruit.filter(function (word) {
    // results filters through the 'fruit' array established through the 'word' function
    console.log("2");

    return word.toLowerCase().includes(str.toLowerCase()); //converts current 'word' to lowercase and checks against the user's input 'str' which is also lowercase
  });
  showSuggestions(results, str); //passes this through showSuggetions to populate suggestion dropdown
}

// 3      TODO this is going to respond to a keystroke in the search bar and call "search" and call "showSuggestions"
//if the results from search are not empty

function searchHandler(e) {
  search(input.value); // call search function and pass the value of the input
  if (input.value != "") {
    // if input value does not equal an empty string, return the value
    console.log("check");
    return;
  }
}

// 2      TODO this is going to show the list of suggestions that are "relevant" based on the array "results" and display as a list below the search bar
//reset the list each time they type a key
// it also highlights a suggestion with a mouseover Eventlistener

function showSuggestions(results, inputVal) {
  const listed = results // map over the filtered results
    .map(function (result) {
      // bold the part of the result that matches the input
      const highlightedResult = result.replace(
        new RegExp(inputVal, "i"), // find input value in a case-insensitive way
        `<b>${inputVal}</b>`
      );
      return `<li>${highlightedResult}</li>`; // return the result with the bolded portion
    })
    .join("");

  suggestions.innerHTML = `<ul>${listed}</ul>`; // wrap the list items in a <ul>
}

// 4       TODO this is going to use a "clicked" suggestion and will populate the suggestion into the search bar, changing the inner text
// and it will clear out the suggestions list, and remove the display.

function useSuggestion(e) {
  input.value = e.target.innerText; //when suggestion is selected and clicked, the selected suggestion replaces the input in search bar
  suggestions.innerHTML = ""; //after suggestion is selected and clicked, clear the suggestions list <div>
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
