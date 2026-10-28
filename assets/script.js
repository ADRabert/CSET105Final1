const groceryList = document.getElementById("groceryList"), addToList = (groceryItem) => {
	const groceryListElem = document.createElement("li");
	groceryListElem.innerText = groceryItem;
	groceryList.append(groceryListElem);
}, showItems = (selection) => {
	const purchasedItems = document.body.getElementsByClassName("purchased");
	if (selection != "all") {
		if (selection === "purchased") {
			const tempList = groceryList;
			for (let i = 0; i < purchasedItems.length; i++) purchasedItems[i].remove();
			groceryList.replaceWith(tempList);
		} else {
			const tempList = document.createElement("article");
			tempList.id = "list";
			tempList.append(groceryListBullets);
			for (let i = 0; i < purchasedItems.length; i++) {
				const tempListElem = document.createElement("li");
				tempListElem.innerText = purchasedItems[i].innerText;
				groceryListBullets.append(tempListElem);
			}
		}
	} else document.getElementById("list").replaceWith(groceryList);
}