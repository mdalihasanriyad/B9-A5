const allBtn =document.getElementsByClassName("more");
let count= 40;

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count - 1;
        

        const seat =e.target.innerText;
        const classs ="Economic";
        const price = 550;

        const seatClassPrice = document.getElementById("seat-class-price");

        const li =document.createElement("li");
        const p =document.createElement("p");
        p.innerText= seat;
        const p2 =document.createElement("p2");
        p2.innerText= classs;
        const p3 =document.createElement("p3");
        p3.innerText =price;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        seatClassPrice.appendChild(li);

        const totoalPrice =document.getElementById("totalprice").innerText;

        const convertTotalPrice =parseInt(totoalPrice);
        document.getElementById("totalprice").innerText= convertTotalPrice + parseInt(price);


        setInnerText("seat-count", count);
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}