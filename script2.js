//STRATEGY

// add img elements to HTML page via JS upon page startup

// add event listeners OTHER THAN mouseenter/mouseleave

// use CSS :hover to toggle ice cream names

// after search, irrelevant flavors are hidden by changing CSS to "display: none;", NOT by removing HTML nodes

// after search, tags appear based on tags of remaining flavors (??)

// HTML should not be changed other than on page startup


// const flavorsObj = {  
//   // array containing data objects (ice cream flavors)          
//   pecanStickyBuns: {
//   	id: "pecanStickyBuns", 
//     name: "Pecan Sticky Buns",
//     description: "Buttery Brown Sugar Ice Cream with Pecans, Sticky Bun Dough & a Cream Cheese Frosting Swirl",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/pecan-sticky-buns-detail.png",
//     tags: ["brown_sugar", "pecan", "cream_cheese", "swirl", "dairy", "nut", "pecan_sticky_buns"]
//   },
//   bananaSplit: {
//   	id: "bananaSplit", 
//     name: "Banana Split",
//     description: "Banana & Strawberry Ice Creams with Walnuts, Fudge Chunks & a Fudge Swirl",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/banana-split-detail.png",
//     tags: ["banana", "strawberry", "fudge", "swirl", "dairy", "nut", "fruit", "banana_split"]
//   },
//   chunkyMonkey: {
//   	id: "chunkyMonkey", 
//     name: "Chunky Monkey",
//     description: "Banana Ice Cream with Fudge Chunks & Walnuts",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/chunky-monkey-detail.png",
//     tags: ["banana", "fudge", "nut", "walnut", "fruit", "chunky_monkey"]
//   },
//   halfBaked: {
//   	id: "halfBaked", 
//     name: "Half Baked",
//     description: "Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/half-baked-detail.png",
//     tags: ["chocolate", "vanilla", "chocolate_chip", "cookie_dough", "fudge", "brownie", "half_baked"]
//   },
//   milkAndCookies: {
//   	id: "milkAndCookies", 
//     name: "Milk & Cookies",
//     description: "Vanilla Ice Cream with a Chocolate Cookie Swirl, Chocolate Chip & Chocolate Chocolate Chip Cookies",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/milk-and-cookies-detail.png",
//     tags: ["vanilla", "cookie", "chocolate", "swirl", "chocolate_chip", "milk_and_cookies"]
//   },
//   phishFood: {
//   	id: "phishFood", 
//     name: "Phish Food",
//     description: "Chocolate Ice Cream with Gooey Marshmallow Swirls, Caramel Swirls & Fudge Fish", 
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/phish-food-detail.png",
//     tags: ["chocolate", "marshmallow", "swirl", "caramel", "fudge", "phish_food", "fish_food"]
//   },
//   americoneDream: {
//   	id: "americoneDream", 
//     name: "Americone Dream", 
//     description: "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/americone-dream-detail.png",
//     tags: ["vanilla", "fudge", "waffle", "cone", "caramel", "swirl", "late_show", "stephen_colbert", "americone_dream"]
//   }, 
//   cherryGarcia: { 
//   	id: "cherryGarcia", 
//     name: "Cherry Garcia", 
//     description: "Cherry Ice Cream with Cherries & Fudge Flakes",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cherry-garcia-detail.png",
//     tags: ["cherry", "fudge", "grateful_dead", "cherry_garcia", "fruit"]
//   },
//   mintChocolateCookie: {
//   	id: "mintChocolateCookie", 
//     name: "Mint Chocolate Cookie",
//     description: "Peppermint Ice Cream with Chocolate Sandwich Cookies",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/mint-chocolate-cookie-detail.png",
//     tags: ["mint", "chocolate", "cookie", "peppermint", "mint_chocolate_cookie"]
//   },
//   peanutButterCup: {
//   	id: "peanutButterCup", 
//     name: "Peanut Butter Cup", 
//     description: "Peanut Butter Ice Cream with Peanut Butter Cups",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/peanut-butter-cup-detail.png",
//     tags: ["peanut_butter", "peanut_butter_cup"]
//   }, 
//   coffeeCoffeeBuzzBuzzBuzz: {
//   	id: "coffeeCoffeeBuzzBuzzBuzz", 
//     name: "Coffee, Coffee BuzzBuzzBuzz!",
//     description: "Coffee Ice Cream with Espresso Bean Fudge Chunks",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/coffee-coffee-buzz-detail.png",
//     tags: ["coffee", "espresso", "bean", "fudge", "coffee_coffee_buzz_buzz_buzz", "coffee_buzz"]
//   }, 
//   cinnamonBuns: {
//   	id: "cinnamonBuns", 
//     name: "Cinnamon Buns", 
//     description: "Caramel Ice Cream with Cinnamon Bun Dough & a Cinnamon Streusel Swirl", 
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cinnamon-bun-detail.png", 
//     tags: ["cinnamon", "caramel", "cinnamon_bun", "dough", "streusel", "swirl"]
//   }, 
//   vanilla: {
//   	id: "vanilla", 
//     name: "Vanilla", 
//     description: "Vanilla Ice Cream",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/vanilla-detail.png",
//     tags: ["vanilla"]
//   }, 
//   saltedCaramelAlmond: {
//   	id: "saltedCaramelAlmond", 
//     name: "Salted Caramel Almond", 
//     description: "Vanilla Bean Ice Cream with Roasted Almond Slivers, Fudge Flakes & a Salted Caramel Swirl",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/salted-caramel-almond-detail.png",
//     tags: ["vanilla", "vanilla_bean", "almond", "nut", "fudge", "caramel", "swirl", "salted_caramel_almond"]
//   }, 
//   theTonightDough: {
//   	id: "theTonightDough", 
//     name: "The Tonight Dough",
//     description: "Caramel & Chocolate Ice Creams with Chocolate Cookie Swirls & Gobs of Chocolate Chip Cookie Dough & Peanut Butter Cookie Dough.",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/tonight-dough-detail.png",
//     tags: ["caramel", "chocolate", "cookie", "swirl", "cookie_dough", "chocolate_chip", "peanut_butter", "tonight_show", "jimmy_fallon", "the_tonight_dough"]
//   }, 
//   redVelvetCake: {
//   	id: "redVelvetCake", 
//     name: "Red Velvet Cake", 
//     description: "Red Velvet Cake Ice Cream with Red Velvet Cake Pieces & a Cream Cheese Frosting Swirl",
//     imgUrl: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/red-velvet-detail.png",
//     tags: ["cake", "red_velvet", "red_velvet_cake", "cream_cheese", "frosting", "swirl"]
//   }
// };

const flavorsArr = [
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
    tags: ["chocolate", "marshmallow", "swirl", "caramel", "fudge", "phish_food"]
  },
  {
    flavorID: "americoneDream", 
    name: "Americone Dream", 
    description: "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/americone-dream-detail.png",
    tags: ["vanilla", "fudge", "waffle", "cone", "caramel", "swirl", "stephen_colbert", "americone_dream"]
  }, 
  {
    flavorID: "cherryGarcia", 
    name: "Cherry Garcia", 
    description: "Cherry Ice Cream with Cherries & Fudge Flakes",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/cherry-garcia-detail.png",
    tags: ["cherry", "cherries", "fudge", "cherry_garcia", "fruit"]
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
    tags: ["coffee", "espresso", "bean", "fudge", "coffee_coffee_buzz_buzz_buzz"]
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
    tags: ["caramel", "chocolate", "cookie", "swirl", "cookie_dough", "chocolate_chip", "peanut_butter", "jimmy_fallon", "the_tonight_dough"]
  }, 
  {
    flavorID: "redVelvetCake", 
    name: "Red Velvet Cake", 
    description: "Red Velvet Cake Ice Cream with Red Velvet Cake Pieces & a Cream Cheese Frosting Swirl",
    image: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/red-velvet-detail.png",
    tags: ["cake", "red_velvet", "red_velvet_cake", "cream_cheese", "frosting", "swirl"]
  }
]


const searchBar = document.getElementById("searchbar");
const thumbnailContainer = document.getElementById("thumbnail-container");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const tagContainer = document.getElementById("tags-container");
const tagButtons = document.getElementById("tags-container").children;
const thumbnailArr = document.getElementsByTagName("img");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalText = document.getElementById("modalText");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");

let appliedTags = [];


searchBar.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		showResults(getResults());
	}
});

searchBtn.addEventListener("click", function() {
	showResults(getResults());
});

searchBtn.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		showResults();
	}
});

resetBtn.addEventListener("click", resetFlavors);

resetBtn.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		resetFlavors();
	}
});

modalCloseBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);

// let tagButtonsArray = Array.from(tagButtons);
// tagButtonsArray.forEach(function(button) {
//   button.addEventListener("click", function(e){
//     console.log(`${e.target} was clicked`);
//   });
// });


function populateFlavorImages() {

	flavorsArr.forEach(function(obj){
		let flavorImgNode = document.createElement("div");
		flavorImgNode.id = obj.flavorID;
		flavorImgNode.className = "flavorImgDisplay";
		thumbnailContainer.appendChild(flavorImgNode);

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

// function getResults() {
// 	if (searchBar.value.length > 2) {
// 	  let query = searchBar.value.split(" ");
// 	  query = query.join("_");
// 	  let regex = new RegExp(query + "|" + query.slice(0,-1), "i");
//     appliedTags.push(regex);
// 	  return flavorsArr.filter(function(obj) {
// 	    return regex.test(obj.tags);
//   	  });
// 	} else {
// 		return flavorsArr;
// 	}
// };


function showResults(arr) {
	flavorsArr.forEach(function(obj) {
		if (arr.includes(obj.flavorID)) {
			document.getElementById(obj.flavorID).className = "flavorImgDisplay";
		} else {
			document.getElementById(obj.flavorID).className = "flavorImgHide";
		}
	})
	showTags(findTags(arr));
} 

function createSearchbarRegex() {
   if (searchBar.value.length > 2) {
      let query = searchBar.value.split(" ");
      query = query.join("_");
      let regex = new RegExp(query + "|" + query.slice(0,-1), "i");
      appliedTags.push(regex);
    }
}

function getResults() {
    let flavorIDs = [];
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
        flavorIDs.push(obj.flavorID);
      }
  })
    return flavorIDs;
};

function resetFlavors() {
	flavorsArr.forEach(function(obj) {
		document.getElementById(obj.flavorID).className = "flavorImgDisplay";
	})
	var allTagButtons = Array.from(tagButtons);
	allTagButtons.forEach(function(elem) {
		elem.className = "tagButtonHide";
	});
  appliedTags = [];
}

function generateModal(e) {
	let lookup = e.target.parentNode.id;
    modal.style.display = "block";
    flavorsArr.forEach(function(obj) {
      	if (obj.flavorID == lookup) {
      		modalText.innerHTML = obj.name;
      		modalDesc.innerHTML = obj.description;
      	}
      });
    modalImg.src = e.target.src;
};

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


function findTags(arr) {
	let tagsToDisplay = [];
	arr.forEach(function(obj) {
		obj.tags.forEach(function(tag) {
			if (tagsToDisplay.indexOf(tag) < 0) {
				tagsToDisplay.push(tag);
			}
		})
	});
	// tagsToDisplay = tagsToDisplay.map(function(uniqueTag) {
	// 	return uniqueTag.replace(/_/g, " ");
	// });
	return tagsToDisplay;
}

function appendTags(arr) {
	arr.forEach(function(tag) { 
		let button = document.createElement("button");
		button.className = "tagButtonHide";
		button.innerHTML= tag.replace(/_/g, " ");
		button.id = tag + "_button";
		tagContainer.appendChild(button);
	});
}

function showTags(arr) {
	//first hides all buttons, in case any are displayed
			var currentlyDisplayedButtons = Array.from(document.getElementsByClassName("tagButtonDisplay"));
			currentlyDisplayedButtons.forEach(function(elem) {
					elem.className = "tagButtonHide";
			});
	//then shows appropriate buttons by switching class name			
		arr.forEach(function(tag) {
			let buttonToDisplay = document.getElementById(tag + "_button");
			buttonToDisplay.className = "tagButtonDisplay";
		})
}

// further filters search results based on selected tag
function restrictResults(e) {
  let searchForTag = e.target.id.slice(0,-7);
  searchForTag = new RegExp(searchForTag, "i");
  appliedTags.push(searchForTag);
     flavorsArr.forEach(function(obj) {
      if (!obj.tags.includes(searchForTag) && document.getElementById(obj.flavorID).className == "flavorImgDisplay") {
          document.getElementById(obj.flavorID).className = "flavorImgHide";
      }
  });
}

function undoTagRestriction(e) {
    let searchForTag = e.target.id.slice(0,-7);
    searchForTag = new RegExp(searchForTag, "i");
    appliedTags.splice(appliedTags.indexOf(searchForTag), 1);
     flavorsArr.forEach(function(obj) {
      if (!obj.tags.includes(searchForTag) && document.getElementById(obj.flavorID).className == "flavorImgDisplay") {
          document.getElementById(obj.flavorID).className = "flavorImgHide";
      }
  });
}

// when clicked, changes class name to "tagButtonClicked" 
// when clicked again, changes class name back to "tagButtonDisplay" 
function changeTagButtonClass(e) {
      if (e.target.className == "tagButtonDisplay") {
    e.target.className = "tagButtonClicked";
      } else {
        e.target.className = "tagButtonDisplay";
      }
}

populateFlavorImages();
appendTags(findTags(flavorsArr));


for (let i = 0; i < thumbnailArr.length; i++) {
	thumbnailArr[i].addEventListener("click", generateModal);
}


// add event listeners to all tag buttons
// when clicked, changes class name to "tagButtonClicked" 
// when clicked again, changes class name back to "tagButtonDisplay" 
// for (let i = 0; i < tagButtons.length; i++) {
//   tagButtons[i].addEventListener("click", function(e) {
//     // if (e.target.className == "tagButtonDisplay") {
//     // e.target.className = "tagButtonClicked";
//     // console.log("an unclicked button was clicked");
//     //   } else {
//     //     e.target.className = "tagButtonDisplay";
//     //     console.log("a clicked button was clicked again");
//     //   }
//     if (e.target.className == "tagButtonDisplay") {
//       changeTagButtonClass(e);
//       restrictResults(e);
//       } else if (e.target.className == "tagButtonClicked") {
//         changeTagButtonClass(e);
//         undoTagRestriction(e);
//         console.log("search results should be restored");
//       }
//   });
// }

// let arr1 = ["cool", "story", "bro", "I", "am", "impressed"];
// let arr2 = [/cool/, /story/, /bro/];


// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr2[i].test(arr1[j])) {
//         console.log("match was found");
//       }
//     }
// }

// arr2.forEach(function(regex) {
//   arr1.forEach(function(word) {
//     if (regex.test(word)) {console.log("match was found")};
//   })
// })




// arr1.some(function(word) {
//    return arr2.map(function(regex) {
//         return regex.test(word);
//     });
// });

// arr1.some(function(word){
//    return arr2[0].test(word);
// });