const toChange = document.getElementById("linkedin-button");
toChange.setAttribute("href", "https://www.linkedin.com/in/mibird/");

const emailModalButton = document.getElementById('email-modal-button');
const modalWrapper = document.getElementById('modal-wrapper');
// const modalCloseButton = document.getElementById('close-modal-button');
const body = document.body;

emailModalButton.addEventListener('mousedown', showModal);
// modalCloseButton.addEventListener('mousedown', hideModal);
modalWrapper.addEventListener('mousedown', hideModal);

// 
function showModal() {
    // console.log("hit!");
    modalWrapper.style.display = 'flex';
    body.style.overflow = 'hidden';
}

function hideModal(e) {
    if(e.target === modalWrapper) {
        modalWrapper.style.display = 'none';
        body.style.overflow = 'unset';
    }
}