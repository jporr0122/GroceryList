const groceryList = document.getElementsByClassName("groceryList")[0];
const groceryListItems = document.getElementById("listItems");
const listInput = document.getElementById("itemInput");
const deleteAllItems = document.getElementById("deleteAll");

deleteAllItems.addEventListener("click", function(){
	groceryListItems.innerHTML = "";
})

listInput.addEventListener("keydown", function
(event){
	if(event.key == "Enter")
		addItem();
})

function addItem(){
	var listItem = document.createElement("listItem");
	listItem.innerHTML = "- " + listInput.value + "<br />";
	
	listItem.addEventListener("click", function(){
		listItem.style.textDecoration = "line-through";
	})
	
	groceryListItems.insertAdjacentElement("beforeend", listItem);
	
	listInput.value = "";
}


