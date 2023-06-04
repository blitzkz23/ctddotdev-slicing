const cardList = document.getElementById("card-list")
const testimonalList = document.getElementById("testimonial-list")
// This function will be load first when the web load
window.onload = function() {
    const xhr = new XMLHttpRequest();
    const url = "./data/data-house.json";
    const xhr2 = new XMLHttpRequest();
    const url2 = "./data/data-testimony.json";

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Get the data from storage
            let data = JSON.parse(localStorage.getItem("data-house"));

            // If data not exist, read from json response
            if (!data) {
                localStorage.setItem("data-house", this.response);
                data = JSON.parse(localStorage.getItem("data-house"));
            }

            // Render data
            populateHomeList(data)
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Get data from storage
            let data = JSON.parse(localStorage.getItem("data-testimony"));

            if (!data) {
                // Read data from response json
                localStorage.setItem("data-testimony", this.response);
                data = JSON.parse(localStorage.getItem("data-testimony"));
            }

            // Render data
            populateTestimonyList(data)
        }
    };
    xhr2.open("GET", url2, true);
    xhr2.send();
}   

function populateHomeList(data) {
    // Render to HTML
    for(let i=0;i < data.length;i++) {
        const card = document.createElement("div");
        const imgWrapper = document.createElement("div");
        const img = document.createElement("img");
        const imgDetail = document.createElement("p");
        const icon = document.createElement("img");
        const houseName = document.createElement("h4");
        const houseDesc = document.createElement("p");
        const housePrice = document.createElement("h5");

        imgDetail.appendChild(document.createTextNode(data[i].room_num + " rooms"));
        houseName.appendChild(document.createTextNode(data[i].name));
        houseDesc.appendChild(document.createTextNode(data[i].address));
        housePrice.appendChild(document.createTextNode(data[i].price));
        img.src = data[i].img_url;
        icon.src = data[i].icon;

        card.setAttribute("class", "card-item");
        imgWrapper.setAttribute("class", "img-wrapper");
        imgDetail.setAttribute("class", "room-detail")
        icon.setAttribute("class", "btn-icon")

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(imgDetail);
        imgWrapper.appendChild(icon);
        card.appendChild(imgWrapper);
        card.appendChild(houseName);
        card.appendChild(houseDesc);
        card.appendChild(housePrice);

        cardList.appendChild(card)
    }
}

function populateTestimonyList(data) {
    // Render to HTML
    for (let i=0;i < data.length; i++) {
        const card = document.createElement("div");
        const imgWrapper = document.createElement("div");
        const img = document.createElement("img");
        const user = document.createElement("p");
        const testimony = document.createElement("p");

        testimony.appendChild(document.createTextNode(data[i].testimony));
        user.appendChild(document.createTextNode(data[i].user));
        img.src = data[i].img_url;

        card.setAttribute("class", "testimony-card");
        imgWrapper.setAttribute("class", "img-wrapper");
        img.setAttribute("class", "testimony-user");
        user.setAttribute("class", "testimony-by")
        testimony.setAttribute("class", "testimony")

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(user);
        card.appendChild(imgWrapper);
        card.appendChild(testimony);

        testimonalList.appendChild(card);

    };
}