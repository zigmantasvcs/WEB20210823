function getItems(){
    let item1 = {
        image: "badcat.jpg",
        description: "Parduodamas blogas katinas",
        price: 1000,
        currency: "EUR"
    };

    let item2 = {
        image: "https://picsum.photos/365/365?random=1",
        description: "Parduodamas paslauga",
        price: 999.00,
        currency: "EUR"
    };

    let item3 = {
        image: "https://picsum.photos/365/365?random=2",
        description: "Parduodamas paslauga",
        price: 999.00,
        currency: "EUR"
    };

    
    let item4 = {
        image: "https://picsum.photos/365/365?random=3",
        description: "Parduodamas paslauga",
        price: 888.00,
        currency: "EUR"
    };

    return [item1, item2, item3, item4];
}

function displayItems(items, container){

    let allItems = "";
    for (let index = 0; index < items.length; index++) {

        const item = items[index];

        let template = '<div class="child"> <div class="content"> <img src="{{image}}" alt=""> <p>{{description}}</p><p>Kaina: {{price}} {{currency}}.</p></div></div>';

        template = template.replace("{{image}}", item.image);
        template = template.replace("{{description}}", item.description);
        template = template.replace("{{price}}", item.price);
        template = template.replace("{{currency}}", item.currency);

        allItems += template;
    }

    container.innerHTML = allItems;
}