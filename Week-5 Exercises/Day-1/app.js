const customerPerPage = 10;
let pageNo = 1;

var button = document.getElementsByTagName("a");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (e) {
        let pageNo = e.target.innerHTML;
        console.log(pageNo);

        let oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://api.openbrewerydb.org/breweries?page=" + pageNo + "&per_page=" + customerPerPage);
        oReq.send();

    });
}



let customersList;
function reqListener() {

    if (window.location.hash) {
        // Fragment exists
        console.log("Fragment exists");

    } else {
        // Fragment doesn't exist
        console.log("Fragment doesn't exist");
        let value = this.responseText;
        customersList = JSON.parse(value);
        console.log(customersList);
        console.log(this.status);

    }

    let tables = ` 
    <table id="customers" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Mail Address</th>  
            </tr>
        </thead>`


    for (let i = 0; i < customersList.length; i++) {
        let customers = customersList[i];
        tables += `
         <tr>
           <td>${customers.name}</td>
           <td>${customers.city}</td> 
           <td>${customers.website_url}</td> 
         </tr>`
    };
    tables += `</table>`;


    $('#customers').html( tables);
    
    
}
