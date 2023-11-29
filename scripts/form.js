/* ------------------------------ */
/* ----------Credit Card--------- */
/* ------------------------------ */
/* Edits details on input */

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector(' .card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

document.querySelector('.event-input').oninput = () =>{
    document.querySelector('.payment-amount').innerText = document.querySelector('.event-input').value*document.querySelector('.ticket-input').value;
}

document.querySelector('.ticket-input').oninput = () =>{
    document.querySelector('.payment-amount').innerText = document.querySelector('.event-input').value*document.querySelector('.ticket-input').value;
}
/* ------------------------------ */
/* ---------Submit Popup--------- */
/* ------------------------------ */
/* Popup on submit */
function alertPopup() {
    if (confirm("You are about to proceed with a payment of $"+document.querySelector('.event-input').value*document.querySelector('.ticket-input').value+". Proceed?")) {
        if ((document.querySelector('.event-input').value*document.querySelector('.ticket-input').value)==0){
            alert("You bought absolutely nothing. Congrats!");
        }
        else{
            alert("Payment success! The ticket details have been emailed to you at "+document.querySelector('.email-input').value+".");
        }
    }
}
