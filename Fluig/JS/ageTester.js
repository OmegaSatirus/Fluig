console.log("Age tester loaded");

function dateRestriction() {
    const today = new Date();
    const minAge = new Date();
    minAge.setFullYear(today.getFullYear() - 18);

    const maxDate = minAge.toISOString().slice(0, 10);

    console.log(maxDate);

    document.getElementById("Age").setAttribute("max", maxDate);
}

window.addEventListener("load", dateRestriction);
