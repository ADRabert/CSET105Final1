const groceryList = document.getElementById("groceryList");
const addToList = (groceryItem) => {
	const groceryListElem = document.createElement("li");
	groceryListElem.innerHTML = `<a class="unpurchased" href="#" onclick="changeStatus(this)">${groceryItem}</a>`;
	groceryList.append(groceryListElem);
}, showItems = (selection) => {
	document.getElementsByTagName("ul")[0].replaceWith(groceryList); 
	if (selection !== "allGroceries") {
		if (selection === "purchased") {
			const purchasedList = document.createElement("ul");
			purchasedList.id = "purchasedList";
			const purchasedItems = groceryList.getElementsByClassName("purchased");
			for (let i = 0; i < purchasedItems.length; i++) {
				const purchasedElem = document.createElement("li");
				purchasedElem.innerText = purchasedItems[i].innerText;
				purchasedList.append(purchasedElem);
			}
			document.getElementById("groceryList").replaceWith(purchasedList);
		} else {
			const unpurchasedList = document.createElement("ul");
			unpurchasedList.id = "unpurchasedList";
			const unpurchasedItems = groceryList.getElementsByClassName("unpurchased");
			for (let i = 0; i < unpurchasedItems.length; i++) {
				const unpurchasedElem = document.createElement("li");
				unpurchasedElem.innerText = unpurchasedItems[i].innerText;
				unpurchasedList.append(unpurchasedElem);
			}
			document.getElementById("groceryList").replaceWith(unpurchasedList);
		}
	}
}, changeStatus = (bullet) => {
	if (bullet.className === "unpurchased") bullet.className = "purchased";
	else bullet.className = "unpurchased";
}