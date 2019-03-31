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

const searchBar = document.getElementById("searchbar");
const thumbnailContainer = document.getElementById("thumbnail-container");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const thumbnailArr = document.getElementsByClassName("img");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalText = document.getElementById("modalText");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");


//EVENT LISTENERS

modalCloseBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);


searchBar.addEventListener("keypress", function() {

    if (searchBar.value.length > 2 && event.keyCode == 13) {
      enterSearch();
    }
});
// runs search when enter key is pressed while searchbar is selected


searchBtn.addEventListener("click", function() {
  if (searchBar.value.length > 2) {
    enterSearch();
  }
});
// runs search when search button is clicked


resetBtn.addEventListener("click", resetFlavors);
// clears search results when reset button is clicked


resetBtn.addEventListener("keypress", function(){
 
  if (event.keyCode == 13) {
    resetFlavors();
  }
 });
// clears search results when enter key is pressed and reset button is selected


//FUNCTIONS


function populateImages() {
  flavors.forEach(function(obj) {
  
  let imgNode = document.createElement("div"); 
  imgNode.id = obj.flavorID; 
  imgNode.name = obj.name;
  imgNode.desc = obj.description;
  thumbnailContainer.appendChild(imgNode);
  // sets up flavor thumbnail container and assigns attributes

  let img = document.createElement("img");
  img.src = obj.image;
  img.className = "img";
  imgNode.appendChild(img);
  // sets up flavor thumbnails and assigns attributes

  let desc = document.createElement("p");
  let descText = document.createTextNode(obj.name); 
  imgNode.appendChild(desc);
  desc.appendChild(descText);
  desc.id = obj.flavorID + "-desc";
  desc.className = "name-hide";
  // sets up <p> element to receive description text from flavors object
  });
};
// populates flavor images on page which contain object data that can be used by script


function addMouseListeners() {
  for (let i = 0; i < thumbnailArr.length; i++) {

  thumbnailArr[i].addEventListener("mouseenter", function(event) {
    event.target.nextSibling.className = "name";
  });

    thumbnailArr[i].addEventListener("mouseleave", function(event) {
    event.target.nextSibling.className = "name-hide";
  });

    thumbnailArr[i].addEventListener("click", clickImage);
  }
};
// Loops through images and adds event listeners to each.
// The first two listeners allow flavor name to be toggled when mouse enters/leaves.
// Third listener opens modal box when an image is clicked.



function clickImage(event) {
      console.log(event.target.parentNode.id +" was clicked");
      modal.style.display = "block";
      modalText.innerHTML = event.target.parentNode.name;
      modalDesc.innerHTML = event.target.parentNode.desc;
      modalImg.src = event.target.src;
    }
// function to generate modal content when img is clicked



function getQueries() {
  let query = searchBar.value.split(" ");
  query = query.join("_");
  let regex = new RegExp(query + "|" + query.slice(0,-1), "i");
  return flavors.filter(function(obj) {
    return !regex.test(obj.tags);
  });
};
// normalizes user input into a single regex and then returns array of objects which do NOT contain corresponding tags


function removeNode(arr) {

  arr.forEach(function(obj) {
    document.getElementById("thumbnail-container").removeChild(document.getElementById(obj.flavorID));
  })
};
// accepts array from getQueries() and deletes those elements by using the object flavorID property 


function checkNumberOfElements() {

  return flavors.every(function(obj) {
    return document.contains(document.getElementById(obj.flavorID));
  });
};
// returns whether or not full list of flavors is currently displayed on page


function enterSearch() {

  if (checkNumberOfElements()) {

    removeNode(getQueries());

  } else {

    resetFlavors();
    removeNode(getQueries());
  }
};
// removes nodes of flavors which do not match user's search


function resetFlavors() {
  thumbnailContainer.innerHTML ="";
  //  searchBar.value = "";
  populateImages();
  addMouseListeners();
};
// for use when reset button is clicked. clears HTML from <div> container and then adds entire flavor list back (along with mouse click event listeners)


function closeModal() {
  modal.style.display = "none";
  modalImg.src = "";
}
// functioned called inside event listener to close modal when the X icon is clicked


function clickOutside(e) {
    if (e.target == modal) {
      closeModal();
    }
}
// closes modal box by clicking outside of it


//CODE TO EXECUTE ON PAGE OPEN

populateImages();
addMouseListeners();
// initializes the page with all available ice cream flavors and adds event listeners to all flavor elements 


// *************************************************************

//The below is some practice 
// let names = ["tom", "ted", "bill", "peter"];
// let regs =  [/tom/, /bill/];

// returns true

// names.some(function(name) {
//   return regs.map(function(reg){
//     return reg.test(name);
//   });
// });


// function getQueries() {
//   let queries = searchBar.value.split(" ");
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


// searchBar.addEventListener("keydown", function() {
 
//   if (event.keyCode == 8) {
//   searchBar.value = "";
//   resetFlavors();
//   }
// });
// // resets search results when backspace is pressed