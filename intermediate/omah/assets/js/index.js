const cardList = document.getElementById("card-list")

// This function will be load first when the web load
window.onload = function() {
    const xhr = new XMLHttpRequest();
    const url = "./data/data-house.json";

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Get the data from storage
            let data = JSON.parse(localStorage.getItem("data"));

            // If data not exist, read from json response
            if (!data) {
                localStorage.setItem("data", this.response);
                data = JSON.parse(localStorage.getItem("data"))
            }
            
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
    };
    xhr.open("GET", url, true);
    xhr.send();
}