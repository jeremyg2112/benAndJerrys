// array containing data objects (ice cream flavors)
const flavors = [
  {
    flavorID: "pecanStickyBuns", 
    name: "Pecan Sticky Buns",
    description: "Buttery Brown Sugar Ice Cream with Pecans, Sticky Bun Dough & a Cream Cheese Frosting Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/pecan-sticky-buns-detail.png",
    tags: ["brown_sugar", "pecan", "cream_cheese", "swirl", "dairy", "nut", "pecan_sticky_buns"]
  },
  {
    flavorID: "bananaSplit", 
    name: "Banana Split",
    description: "Banana & Strawberry Ice Creams with Walnuts, Fudge Chunks & a Fudge Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/banana-split-detail.png",
    tags: ["banana", "strawberry", "fudge", "swirl", "dairy", "nut", "fruit", "banana_split"]
  },
  {
    flavorID: "chunkyMonkey",
    name: "Chunky Monkey",
    description: "Banana Ice Cream with Fudge Chunks & Walnuts",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/chunky-monkey-detail.png",
    tags: ["banana", "fudge", "nut", "walnut", "fruit", "chunky_monkey"]
  },
  {
    flavorID:"halfBaked",
    name: "Half Baked",
    description: "Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/half-baked-detail.png",
    tags: ["chocolate", "vanilla", "chocolate_chip", "cookie_dough", "fudge", "brownie", "half_baked"]
  },
  {
    flavorID: "milkAndCookies",
    name: "Milk & Cookies",
    description: "Vanilla Ice Cream with a Chocolate Cookie Swirl, Chocolate Chip & Chocolate Chocolate Chip Cookies",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/milk-and-cookies-detail.png",
    tags: ["vanilla", "cookie", "chocolate", "swirl", "chocolate_chip", "milk_and_cookies"]
  },
  {
    flavorID: "phishFood", 
    name: "Phish Food",
    description: "Chocolate Ice Cream with Gooey Marshmallow Swirls, Caramel Swirls & Fudge Fish", 
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/phish-food-detail.png",
    tags: ["chocolate", "marshmallow", "swirl", "caramel", "fudge", "phish_food", "fish_food"]
  },
  {
    flavorID: "americoneDream", 
    name: "Americone Dream", 
    description: "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/americone-dream-detail.png",
    tags: ["vanilla", "fudge", "waffle", "cone", "caramel", "swirl", "late_show", "stephen_colbert", "americone_dream"]
  }, 
  {
    flavorID: "cherryGarcia", 
    name: "Cherry Garcia", 
    description: "Cherry Ice Cream with Cherries & Fudge Flakes",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cherry-garcia-detail.png",
    tags: ["cherry", "fudge", "grateful_dead", "cherry_garcia", "fruit"]
  },
  {
    flavorID: "mintChocolateCookie",
    name: "Mint Chocolate Cookie",
    description: "Peppermint Ice Cream with Chocolate Sandwich Cookies",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/mint-chocolate-cookie-detail.png",
    tags: ["mint", "chocolate", "cookie", "peppermint", "mint_chocolate_cookie"]
  },
  {
    flavorID: "peanutButterCup", 
    name: "Peanut Butter Cup", 
    description: "Peanut Butter Ice Cream with Peanut Butter Cups",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/peanut-butter-cup-detail.png",
    tags: ["peanut_butter", "peanut_butter_cup"]
  }, 
  {
    flavorID: "coffeeCoffeeBuzzBuzzBuzz",
    name: "Coffee, Coffee BuzzBuzzBuzz!",
    description: "Coffee Ice Cream with Espresso Bean Fudge Chunks",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/coffee-coffee-buzz-detail.png",
    tags: ["coffee", "espresso", "bean", "fudge", "coffee_coffee_buzz_buzz_buzz", "coffee_buzz"]
  }, 
  {
    flavorID: "cinnamonBuns", 
    name: "Cinnamon Buns", 
    description: "Caramel Ice Cream with Cinnamon Bun Dough & a Cinnamon Streusel Swirl", 
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cinnamon-bun-detail.png", 
    tags: ["cinnamon", "caramel", "cinnamon_bun", "dough", "streusel", "swirl"]
  }, 
  {
    flavorID: "vanilla", 
    name: "Vanilla", 
    description: "Vanilla Ice Cream",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/vanilla-detail.png",
    tags: ["vanilla"]
  }, 
  {
    flavorID: "saltedCaramelAlmond", 
    name: "Salted Caramel Almond", 
    description: "Vanilla Bean Ice Cream with Roasted Almond Slivers, Fudge Flakes & a Salted Caramel Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/salted-caramel-almond-detail.png",
    tags: ["vanilla", "vanilla_bean", "almond", "nut", "fudge", "caramel", "swirl", "salted_caramel_almond"]
  }, 
  {
    flavorID: "theTonightDough",
    name: "The Tonight Dough",
    description: "Caramel & Chocolate Ice Creams with Chocolate Cookie Swirls & Gobs of Chocolate Chip Cookie Dough & Peanut Butter Cookie Dough.",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/tonight-dough-detail.png",
    tags: ["caramel", "chocolate", "cookie", "swirl", "cookie_dough", "chocolate_chip", "peanut_butter", "tonight_show", "jimmy_fallon", "the_tonight_dough"]
  }, 
  {
    flavorID: "redVelvetCake", 
    name: "Red Velvet Cake", 
    description: "Red Velvet Cake Ice Cream with Red Velvet Cake Pieces & a Cream Cheese Frosting Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/red-velvet-detail.png",
    tags: ["cake", "red_velvet", "red_velvet_cake", "cream_cheese", "frosting", "swirl"]
  }
]


//DOM VARIABLES

let searchInput = document.getElementById("searchbar");
let flavorImages = document.getElementById("thumbnails");
let search = document.getElementById("search");
let clear = document.getElementById("clear");
let icon = document.getElementsByClassName("img");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let modalText = document.getElementById("modalText");
let modalDesc = document.getElementById("modalDesc");


//EVENT LISTENERS

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);


searchInput.addEventListener("keypress", function() {
   //console.log("search executed");
    if (searchInput.value.length > 2 && event.keyCode == 13) {
      enterSearch();
    }
});
// runs search when enter key is pressed while searchbar is selected


// searchInput.addEventListener("keydown", function() {
 
//   if (event.keyCode == 8) {
//   searchInput.value = "";
//   clearFlavors();
//   }
// });
// // resets search results when backspace is pressed


search.addEventListener("click", function() {
  if (searchInput.value.length > 2) {
    enterSearch();
  }
});
// runs search when search button is clicked


clear.addEventListener("click", clearFlavors);
// clears search results when reset button is clicked


clear.addEventListener("keypress", function(){
 
  if (event.keyCode == 13) {
    clearFlavors();
  }
 });
// clears search results when enter key is pressed and reset button is selected

// function openModal() {
//   modal.style.display = "block";
// }

// Loops through images and adds event listeners to each
function addMouseListeners() {
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("mouseenter", function(event) {

    event.target.nextSibling.className = "name";
  });

    icon[i].addEventListener("mouseleave", function(event) {
    event.target.nextSibling.className = "name-hide";
  });

    icon[i].addEventListener("click", function(event) {
      console.log(event.target.parentNode.id +" was clicked");
      modal.style.display = "block";
      modalText.innerHTML = event.target.parentNode.name;
      modalDesc.innerHTML = event.target.parentNode.desc;
      let generatedImg = document.createElement("img");
      generatedImg.src = event.target.src;
      generatedImg.id = "generatedImg";
      modalText.parentNode.appendChild(generatedImg);
    });
  }
};


//FUNCTIONS

// function populateImages() {
//   flavors.forEach(function(obj) {
//   let img = document.createElement("img");
//   img.src = obj.image;
//   img.id = obj.flavorID;
//   img.className = "img img-selected";
//   flavorImages.appendChild(img);
//   let desc = document.createElement("p");
//   let descText = document.createTextNode("obj.name"); 
//   desc.appendChild(descText);
//   desc.className= "name";
//   flavorImages.appendChild(desc);
//   });
// };

function populateImages() {
  flavors.forEach(function(obj) {
  let imgNode = document.createElement("div"); 
  imgNode.id = obj.flavorID; 
  imgNode.name = obj.name;
  imgNode.desc = obj.description;
  flavorImages.appendChild(imgNode);
  // imgNode.className= "name-hide name";

  let img = document.createElement("img");
  img.src = obj.image;

  img.className = "img";
  imgNode.appendChild(img);

  let desc = document.createElement("p");
  let descText = document.createTextNode(obj.name); 
  imgNode.appendChild(desc);
  desc.appendChild(descText);
  desc.id = obj.flavorID + "-desc";
  desc.className = "name-hide";
  });
};

// function toggleClass(element) {
//   element.classList.toggle("name-hide");
// }


// takes image URL from flavors object and adds <img> elements to DOM


// function getQueries() {
//   let queries = searchInput.value.split(" ");
//   let regexArr = queries.map(function(query) {
//     return new RegExp(query + "|" + query.slice(0,-1), "i");
//   });
//   return flavors.filter(function(obj) {
//       return regexArr.every(function(regex) {
//        return !regex.test(obj.tags);
//       });
//   });
// };
// // returns flavor objects which match the user's search inputs
// this is an older version that tested an array of regexes against each object. the newer version converts the user's input into a single regex


function getQueries() {
  let query = searchInput.value.split(" ");
  query = query.join("_");
  let regex = new RegExp(query + "|" + query.slice(0,-1), "i");
  return flavors.filter(function(obj) {
    return !regex.test(obj.tags);
  });
};
// converts user input into a single regex and then returns objects which do not contain corresponding tags


function removeNode(arr) {
  arr.forEach(function(obj) {
    // let parent = document.getElementById("thumbnails");
    // let child = document.getElementById(obj.flavorID);
    // parent.removeChild(child);
    document.getElementById("thumbnails").removeChild(document.getElementById(obj.flavorID));
  })
};
// accepts array from getQueries() and uses object flavorID property to delete corresponding nodes from HTML

function checkNumberOfElements() {

  return flavors.every(function(obj) {
    return document.contains(document.getElementById(obj.flavorID));
  });
};

// function howManyElements() {
//   let arr = flavors.map(function(obj) {
//     return document.contains(document.getElementById(obj.flavorID));
//   });
//   return arr.length;
// }

function enterSearch() {

  if (checkNumberOfElements()) {

    removeNode(getQueries());

  } else {

    //alert("Please reset the page before searching again");
    clearFlavors();
    removeNode(getQueries());
  }
};
// checks which elements are still on the page, then decides whether to execute search


function clearFlavors() {
  flavorImages.innerHTML ="";
//  searchInput.value = "";
  populateImages();
  addMouseListeners();
};
// for use when search parameters are cleared. deletes all flavors from page and repopulates them 


function closeModal() {
  modal.style.display = "none";
  generatedImg.remove();
}


function clickOutside(e) {
    if (e.target == modal) {
      closeModal();
    }
}




//CODE TO EXECUTE ON PAGE OPEN

populateImages();
addMouseListeners();
// initializes the page with all available ice cream flavors 



//The below is some practice 
// let names = ["tom", "ted", "bill", "peter"];
// let regs =  [/tom/, /bill/];

// returns true

// names.some(function(name) {
//   return regs.map(function(reg){
//     return reg.test(name);
//   });
// });



// returns objects whose tags don't match user's input
// function findFlavorsToDelete() {

//   let regex = new RegExp(searchInput.value + "|" + searchInput.value.slice(0,-1), "i");
//   console.log(regex);
//   return flavors.filter(function(obj) {
//     return !regex.test(obj.tags);
//   }) 
// }



// create global regex variable 
//let regexInit = "initial value";
//let regex = new RegExp("initial", "i");