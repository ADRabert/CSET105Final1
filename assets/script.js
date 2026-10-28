const groceryList = document.getElementById("groceryList"), addToList = (groceryItem) => {
	const groceryListElem = document.createElement("li");
	groceryListElem.innerHTML = `<button>${groceryItem}</button>`;
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

function strikeThrough(groceryList){
    const list = document.getElementById(groceryList)
if (!list){
    console.error(`List with ID "${groceryList}" not found.`)
    return;
}
list.addEventListener('click', function(strike){
if (strike.target && strike.target.tagname === 'LI'){
    strike.target.classList.toggle('done');
}
});
}
strikeThrough()