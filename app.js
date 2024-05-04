function expirationDate() {
    let packageDays = prompt("Enter Package date")
    if (packageDays === null || packageDays === "") {
        alert("Invalid")
        return;
    }
    packageDays = parseInt(packageDays);

    let currentDate = new Date();


    let expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + packageDays);


    let expirationDateString = expirationDate.toDateString();


    alert("Aapki package " + packageDays + " din baad expire hogi," + "-->" + expirationDateString);
}
