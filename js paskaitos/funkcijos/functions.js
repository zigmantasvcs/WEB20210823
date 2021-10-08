function removeItemFromArray(array, item){
    
    let arrayWithoutItem = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if(element != item){
            arrayWithoutItem.push(element);
        }
    }

    return arrayWithoutItem;
}

// container turi buti html elementas
function displayItems(array, container){

    let innerItems = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        innerItems += "<div>"+ element +"</div>";
    }

    container.innerHTML = innerItems;
}