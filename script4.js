//STRATEGY & OBJECTIVES

// add img elements to HTML page via JS upon page startup

// add event listeners OTHER THAN mouseenter/mouseleave. This functionality can be handled through CSS.

// use CSS :hover instead of event listeners to toggle ice cream names

// after search, irrelevant flavors are hidden by changing className, NOT by removing HTML nodes

// after search, tags appear based on tags of remaining flavors (??)

// HTML elements should be created only once upon page startup, do not add or delete elements afterward

// ---------START-OF-CODE----------

// DATA

// Array of objects containing ice cream flavor data
const flavorData = [
  {
    flavorID: "pecanStickyBuns", 
    name: "Pecan Sticky Buns",
    description: "Buttery Brown Sugar Ice Cream with Pecans, Sticky Bun Dough & a Cream Cheese Frosting Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/pecan-sticky-buns-detail.png",
    tags: ["brown_sugar", "pecan", "cream_cheese", "swirl", "nut", "pecan_sticky_buns"]
  },
  {
    flavorID: "bananaSplit", 
    name: "Banana Split",
    description: "Banana & Strawberry Ice Creams with Walnuts, Fudge Chunks & a Fudge Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/banana-split-detail.png",
    tags: ["banana", "strawberry", "fudge", "swirl", "nut", "fruit", "banana_split", "banana_split"]
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
    tags: ["chocolate", "marshmallow", "swirl", "caramel", "fudge", "phish_food"]
  },
  {
    flavorID: "americoneDream", 
    name: "Americone Dream", 
    description: "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/americone-dream-detail.png",
    tags: ["vanilla", "fudge", "waffle", "cone", "caramel", "swirl", "americone_dream"]
  }, 
  {
    flavorID: "cherryGarcia", 
    name: "Cherry Garcia", 
    description: "Cherry Ice Cream with Cherries & Fudge Flakes",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cherry-garcia-detail.png",
    tags: ["cherries", "fudge", "fruit", "cherry_garcia"]
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
    tags: ["peanut_butter", "peanut_butter_cup", "peanut_butter_cup"]
  }, 
  {
    flavorID: "coffeeCoffeeBuzzBuzzBuzz",
    name: "Coffee, Coffee BuzzBuzzBuzz!",
    description: "Coffee Ice Cream with Espresso Bean Fudge Chunks",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/coffee-coffee-buzz-detail.png",
    tags: ["coffee", "espresso", "bean", "fudge", "coffee_coffee_buzz_buzz_buzz"]
  }, 
  {
    flavorID: "cinnamonBuns", 
    name: "Cinnamon Buns", 
    description: "Caramel Ice Cream with Cinnamon Bun Dough & a Cinnamon Streusel Swirl", 
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cinnamon-bun-detail.png", 
    tags: ["cinnamon", "caramel", "cinnamon_bun", "streusel", "swirl", "cinnamon_buns"]
  }, 
  {
    flavorID: "vanilla", 
    name: "Vanilla", 
    description: "Vanilla Ice Cream",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/vanilla-detail.png",
    tags: ["vanilla", "vanilla"]
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
    tags: ["caramel", "chocolate", "cookie", "swirl", "cookie_dough", "chocolate_chip", "peanut_butter", "the_tonight_dough"]
  }, 
  {
    flavorID: "redVelvetCake", 
    name: "Red Velvet Cake", 
    description: "Red Velvet Cake Ice Cream with Red Velvet Cake Pieces & a Cream Cheese Frosting Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/red-velvet-detail.png",
    tags: ["cake", "red_velvet", "red_velvet_cake", "cream_cheese", "frosting", "swirl", "red_velvet_cake"]
  },
  {
    flavorID: "chocolateFudgeBrownie", 
    name: "Chocolate Fudge Brownie", 
    description: "Chocolate Ice Cream with Fudge Brownies",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/chocolate-fudge-brownie-detail.png",
    tags: ["chocolate", "fudge", "brownie", "chocolate_fudge_brownie"]
  },
  {
    flavorID: "gimmeSmore", 
    name: "Gimme S'more!", 
    description: "Toasted Marshmallow Ice Cream with Chocolate Cookie Swirls, Graham Cracker Swirls & Fudge Flakes",
    image: "https://www.benjerry.com//files/live/sites/systemsite/files/flavors/products/us/pint/gimme-smore-detail.png",
    tags: ["marshmallow", "chocolate", "cookie", "swirl", "graham_cracker", "fudge", "gimme_smore"]
  },
  {
    flavorID: "truffleKerfuffle", 
    name: "Truffle Kerfuffle", 
    description: "Vanilla Ice Cream with Roasted Pecans, Fudge Chips & a Salted Chocolate Ganache Swirl",
    image: "https://www.benjerry.com//files/live/sites/systemsite/files/flavors/products/us/pint/truffle-kerfuffle-detail.png",
    tags: ["vanilla", "pecan", "fudge", "chocolate", "swirl", "ganache", "truffle_kerfuffle"]
  },
  {
    flavorID: "tripleCaramelChunk", 
    name: "Triple Caramel Chunk", 
    description: "Caramel Ice Cream with a Swirl of Caramel & Fudge-Covered Caramel Chunks",
    image: "https://www.benjerry.com//files/live/sites/systemsite/files/flavors/products/us/pint/triple-caramel-chunk-detail.png",
    tags: ["caramel", "swirl", "fudge", "triple_caramel_chunk"]
  }
]

// GLOBAL VARIABLES

const searchBarSelector = document.getElementById("searchbar");
const thumbnailContainerSelector = document.getElementById("thumbnail-container");
const searchBtnSelector = document.getElementById("searchBtn");
const resetBtnSelector = document.getElementById("resetBtn");
const tagContainerSelector = document.getElementById("tags-container");
const tagButtonsSelector = document.getElementById("tags-container").children;
const thumbnailArrSelector = document.getElementsByTagName("img");
const modalSelector = document.getElementById("modal");
const modalCloseBtnSelector = document.getElementById("modalCloseBtn");
const modalTextSelector = document.getElementById("modalText");
const modalDescSelector = document.getElementById("modalDesc");
const modalImgSelector = document.getElementById("modalImg");

// global array containing regexes created from user-entered search tags
let appliedTags = [];

// used to prevent tags exactly matching searchbar queries (redundant and therefore useless tags) from appearing 
let redundancyRegex;

// pulls data from flavorData and creates HTML elements for each flavor
function populateFlavorImages() {

  flavorData.forEach(function(obj){

    let flavorImgNode = document.createElement("div");
    flavorImgNode.id = obj.flavorID;
    flavorImgNode.className = "flavorImgNode";
    thumbnailContainerSelector.appendChild(flavorImgNode);

    let flavorImg = document.createElement("img");
    flavorImg.src = obj.image;
    flavorImgNode.appendChild(flavorImg);

    let desc = document.createElement("p");
    let descText = document.createTextNode(obj.name); 
    flavorImgNode.appendChild(desc);
    desc.appendChild(descText);
    desc.id = obj.flavorID + "-desc";
    desc.className = "hoverTitle";

  });
}

// converts user's searchbar query into fuzzy-matching regex
function createSearchbarRegex() {
      let query = searchBarSelector.value.split(" ");
      query = query.join("_");
      let regex = new RegExp(query + "|" + query.slice(0,-1), "i");
      appliedTags.push(regex);
     // redundancyRegex = new RegExp("^" + query + "$|^" + query.slice(0,-1) + "$", "i")
    
}

// returns array of flavor objects that each contain all of user's applied tags
function getResults() {
    let flavorsToDisplay = [];
    flavorData.forEach(function(obj) {
      let truths = [];
      // converts tags array in each object to a string for regex testing
      var tagString = obj.tags.join(" ");
      for (let i = 0; i < appliedTags.length; i++) {
        if (appliedTags[i].test(tagString)) {
          truths.push(true);
        } else {
          truths.push(false);
        }
      }
      // pushes only objects that match all tags in appliedTags
      if (!truths.includes(false)) {
        flavorsToDisplay.push(obj);
    }
  })
    return flavorsToDisplay;
};

// accepts output of getResults() and hides or displays HTML elements as necessary
function showResults(arr) {
  flavorData.forEach(function(obj) {
    if (arr.includes(obj)) {
      document.getElementById(obj.flavorID).className = "flavorImgNode";
    } else {
      document.getElementById(obj.flavorID).className = "flavorImgNodeHide";
    }
  })
} 

// for use when user clicks reset button. returns page to initial state and resets appliedTags
function resetFlavors() {
  flavorData.forEach(function(obj) {
    document.getElementById(obj.flavorID).className = "flavorImgNode";
  })
  let allTagButtons = Array.from(tagButtonsSelector);
  allTagButtons.forEach(function(elem) {
    elem.className = "tagButtonHide";
  });
  appliedTags = [];
}

// displays modal and displays information from flavorData object for corresponding flavor
function generateModal(e) {
  let lookup = e.target.parentNode.id;
    modalSelector.style.display = "block";
    flavorData.forEach(function(obj) {
        if (obj.flavorID == lookup) {
          modalTextSelector.innerHTML = obj.name;
          modalDescSelector.innerHTML = obj.description;
        }
      });
    modalImgSelector.src = e.target.src;
};

// closes modal when X icon is clicked
function closeModal() {
  modalSelector.style.display = "none";
  modalImgSelector.src = "";
}

// closes modal when user clicks outside of modal window
function clickOutside(e) {
    if (e.target == modalSelector) {
      closeModal();
    }
}

// creates unique tag buttons from flavorData and adds them to DOM
function appendTags(arr) {
  arr.forEach(function(tag) { 
    let button = document.createElement("button");
    button.className = "tagButtonHide";
    button.innerHTML= tag.replace(/_/g, " ");
    button.id = tag + "_button";
    tagContainerSelector.appendChild(button);
  });
}

// returns array of tags to be displayed
function findTags(flavorsToDisplay) {
  let tagsToDisplay = [];
  flavorsToDisplay.forEach(function(obj) {
    // last index of obj.tags contains the full name of the flavor.
    // removing the last index prevents a tag containing the entire flavor name from appearing while still
    // allowing the flavor name to be searched via the searchbar
    let objTagsMinusLast = obj.tags.slice(0,-1);
    objTagsMinusLast.forEach(function(tag) {
      if (tagsToDisplay.indexOf(tag) < 0) {
        tagsToDisplay.push(tag);
      }
    })
  });
  return tagsToDisplay;
}

// iterates through array from findTags() and changes className of corresponding HTML element
function showTags(tagsToDisplay) {
    
    tagsToDisplay.forEach(function(tag) {
      let buttonToDisplay = document.getElementById(tag + "_button");
      buttonToDisplay.className = "tagButton";
  });
    removeRedundantTag();
}
  
// refines results when the user clicks a tag button
function refineResults(e) {

  let searchForTag = e.target.id.slice(0,-7);
  searchForTag = new RegExp(searchForTag, "i");
  appliedTags.push(searchForTag);
  showResults(getResults());
  let tagsToKeep = findTags(getResults()).map(function(tag) {
    return tag + "_button";
  })

  for (let i = 0; i < tagButtonsSelector.length; i ++) {
    if (!tagsToKeep.includes(tagButtonsSelector[i].id)) {
      tagButtonsSelector[i].className = "tagButtonHide";
    }
  }
}

// adds back elements when a search tag is removed
function undoTagRefine(e) {

    let searchForTag = e.target.id.slice(0,-7);
    searchForTag = new RegExp(searchForTag, "i");
    appliedTags.splice(appliedTags.indexOf(searchForTag), 1);
    showResults(getResults());
    let tagsToAddBack = findTags(getResults()).map(function(tag) {
      return tag + "_button";
    })

    for (let i = 0; i < tagButtonsSelector.length; i ++) {
      if (tagsToAddBack.includes(tagButtonsSelector[i].id) && tagButtonsSelector[i].className != "tagButtonClicked") {
        tagButtonsSelector[i].className = "tagButton";
       } 
   }
  removeRedundantTag();
}

// toggles tag button className when button is clicked 
function changeTagButtonClass(e) {
      if (e.target.className == "tagButton") {
    e.target.className = "tagButtonClicked";
      } else {
        e.target.className = "tagButton";
      }
}

// reassigns redundancyRegex based on searchbar input and removes redundant tag buttons
function removeRedundantTag() {
  let searchBarInput = searchBarSelector.value.replace(/ /g,"_");
  redundancyRegex = new RegExp("^" + searchBarInput + "$|^" + searchBarInput.slice(0,-1) + "$", "i");
  let tagElements = document.getElementsByClassName("tagButton");
  for (let i = 0; i < tagElements.length; i++) {
    let tagID = tagElements[i].id;
    let searchID = tagElements[i].id.slice(0,-7);
    if (redundancyRegex.test(searchID)) {
      document.getElementById(tagID).className = "tagButtonHide";
    }
  }
}

// convenient way to call all functions needed when searchbar query is entered
function allSearchActions() {

   if (searchBarSelector.value.length > 2) {
      resetFlavors();
      createSearchbarRegex();
      showResults(getResults());
      showTags(findTags(getResults()));
    }
}

// initializes the page with all flavor elements
populateFlavorImages();

// initializes the page with all tag buttons (initially set to display:none;)
appendTags(findTags(flavorData));


// EVENT LISTENERS

searchBarSelector.addEventListener("keypress", function(e){
    if (e.keyCode == 13) {
      allSearchActions();
    }
});

searchBtnSelector.addEventListener("click", allSearchActions)
searchBtnSelector.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    allSearchActions();
  }
})

resetBtnSelector.addEventListener("click", resetFlavors)
resetBtnSelector.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    resetFlavors();
  }
})

modalCloseBtnSelector.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);

// applies click events to each element in thumbnailArrSelector HTML collection
for (let i = 0; i < thumbnailArrSelector.length; i++) {
  thumbnailArrSelector[i].addEventListener("click", generateModal);
}

// applies click events to each element in tagButtonsSelector HTML collection
for (let i = 0; i < tagButtonsSelector.length; i++) {
  tagButtonsSelector[i].addEventListener("click", function(e) {
    if (e.target.className == "tagButton") {
      changeTagButtonClass(e);
      refineResults(e);
      } else if (e.target.className == "tagButtonClicked") {
        changeTagButtonClass(e);
        undoTagRefine(e);
      }
  });
}