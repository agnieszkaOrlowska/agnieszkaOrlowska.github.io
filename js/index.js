document.addEventListener('DOMContentLoaded', function() {

    const modals = document.querySelector('.model');
    M.Modal.init(modals);

    const items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});