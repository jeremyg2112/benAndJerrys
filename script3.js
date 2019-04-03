//STRATEGY

// add img elements to HTML page via JS upon page startup

// add event listeners OTHER THAN mouseenter/mouseleave

// use CSS :hover to toggle ice cream names

// after search, irrelevant flavors are hidden by changing CSS to "display: none;", NOT by removing HTML nodes

// after search, tags appear based on tags of remaining flavors (??)

// HTML should not be changed other than on page startup


const flavorsArr = [
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
    tags: ["cinnamon", "caramel", "cinnamon_bun", "dough", "streusel", "swirl", "cinnamon_buns"]
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
  }
]


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

let appliedTags = [];

function populateFlavorImages() {

	flavorsArr.forEach(function(obj){

		let flavorImgNode = document.createElement("div");
		flavorImgNode.id = obj.flavorID;
		flavorImgNode.className = "flavorImgDisplay";
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

function createSearchbarRegex() {
   if (searchBarSelector.value.length > 2) {
      let query = searchBarSelector.value.split(" ");
      query = query.join("_");
      let regex = new RegExp(query + "|" + query.slice(0,-1), "i");
      appliedTags.push(regex);
    }
}

function getResults() {
    let flavorsToDisplay = [];
    flavorsArr.forEach(function(obj) {
      let truths = [];
      var tagString = obj.tags.join(" ");
      for (let i = 0; i < appliedTags.length; i++) {
        if (appliedTags[i].test(tagString)) {
          truths.push(true);
        } else {
          truths.push(false);
        }
      }
      if (!truths.includes(false)) {
        flavorsToDisplay.push(obj);
    }
  })
    return flavorsToDisplay;
};

function showResults(arr) {
  flavorsArr.forEach(function(obj) {
    if (arr.includes(obj)) {
      document.getElementById(obj.flavorID).className = "flavorImgDisplay";
    } else {
      document.getElementById(obj.flavorID).className = "flavorImgHide";
    }
  })
} 

function resetFlavors() {
  flavorsArr.forEach(function(obj) {
    document.getElementById(obj.flavorID).className = "flavorImgDisplay";
  })
  var allTagButtons = Array.from(tagButtonsSelector);
  allTagButtons.forEach(function(elem) {
    elem.className = "tagButtonHide";
  });
  appliedTags = [];
}

function generateModal(e) {
  let lookup = e.target.parentNode.id;
    modalSelector.style.display = "block";
    flavorsArr.forEach(function(obj) {
        if (obj.flavorID == lookup) {
          modalTextSelector.innerHTML = obj.name;
          modalDescSelector.innerHTML = obj.description;
        }
      });
    modalImgSelector.src = e.target.src;
};

function closeModal() {
  modalSelector.style.display = "none";
  modalImgSelector.src = "";
}

function clickOutside(e) {
    if (e.target == modalSelector) {
      closeModal();
    }
}

function appendTags(arr) {
  arr.forEach(function(tag) { 
    let button = document.createElement("button");
    button.className = "tagButtonHide";
    button.innerHTML= tag.replace(/_/g, " ");
    button.id = tag + "_button";
    tagContainerSelector.appendChild(button);
  });
}

function findTags(flavorsToDisplay) {
  let tagsToDisplay = [];
  flavorsToDisplay.forEach(function(obj) {
    // last index of obj.tags contains the full name of the flavor, so this is removed from tag button options
    let objTagsMinusLast = obj.tags.slice(0,-1);
    objTagsMinusLast.forEach(function(tag) {
      if (tagsToDisplay.indexOf(tag) < 0) {
        tagsToDisplay.push(tag);
      }
    })
  });
  return tagsToDisplay;
}

function showTags(tagsToDisplay) {
  //first hides all buttons, in case any are displayed
      // var currentlyDisplayedButtons = Array.from(document.getElementsByClassName("tagButtonDisplay"));
      // currentlyDisplayedButtons.forEach(function(elem) {
      //     elem.className = "tagButtonHide";
      // });
  //then shows appropriate buttons by switching class name      
    tagsToDisplay.forEach(function(tag) {
      if (!appliedTags[0].test(tag)) {
      let buttonToDisplay = document.getElementById(tag + "_button");
      buttonToDisplay.className = "tagButtonDisplay";
    }
  })
}

function restrictResults(e) {
  let searchForTag = e.target.id.slice(0,-7);
  searchForTag = new RegExp(searchForTag, "i");
  appliedTags.push(searchForTag);
  showResults(getResults());
  let tagsToKeep = findTags(getResults()).map(function(tag) {
    return tag + "_button";
  })
  let currentlyDisplayedButtons = document.getElementsByClassName("tagButtonDisplay");
  for (let i = 0; i < currentlyDisplayedButtons.length; i++) {
    if (!tagsToKeep.includes(currentlyDisplayedButtons[i].id)) {
      currentlyDisplayedButtons[i].className = "tagButtonHide";
    }
  }
  //    flavorsArr.forEach(function(obj) {
  //     if (!obj.tags.includes(searchForTag) && document.getElementById(obj.flavorID).className == "flavorImgDisplay") {
  //         document.getElementById(obj.flavorID).className = "flavorImgHide";
  //     }
  // });
}

function undoTagRestriction(e) {
    let searchForTag = e.target.id.slice(0,-7);
    searchForTag = new RegExp(searchForTag, "i");
    appliedTags.splice(appliedTags.indexOf(searchForTag), 1);
    showResults(getResults());
    let tagsToAddBack = findTags(getResults()).map(function(tag) {
      return tag + "_button";
    })
    let currentlyHiddenButtons = document.getElementsByClassName("tagButtonHide");
      for (let i = 0; i < currentlyHiddenButtons.length; i++) {
        if (tagsToAddBack.includes(currentlyHiddenButtons[i].id)) {
          currentlyHiddenButtons[i].className = "tagButtonDisplay";
    }
  }
  //    flavorsArr.forEach(function(obj) {
  //     if (!obj.tags.includes(searchForTag) && document.getElementById(obj.flavorID).className == "flavorImgDisplay") {
  //         document.getElementById(obj.flavorID).className = "flavorImgHide";
  //     }
  // });
}

function changeTagButtonClass(e) {
      if (e.target.className == "tagButtonDisplay") {
    e.target.className = "tagButtonClicked";
      } else {
        e.target.className = "tagButtonDisplay";
      }
}

function allSearchActions() {
      createSearchbarRegex();
      showResults(getResults());
      showTags(findTags(getResults()));
}


populateFlavorImages();
appendTags(findTags(flavorsArr));

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


for (let i = 0; i < thumbnailArrSelector.length; i++) {
  thumbnailArrSelector[i].addEventListener("click", generateModal);
}

for (let i = 0; i < tagButtonsSelector.length; i++) {
  tagButtonsSelector[i].addEventListener("click", function(e) {
    if (e.target.className == "tagButtonDisplay") {
      changeTagButtonClass(e);
      restrictResults(e);
      } else if (e.target.className == "tagButtonClicked") {
        changeTagButtonClass(e);
        undoTagRestriction(e);
        // console.log("search results should be restored");
      }
  });
}