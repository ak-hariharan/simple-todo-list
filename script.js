const addList = document.querySelector('.add-list');
const list = document.querySelector('.list');
// const listItem = document.querySelectorAll('.list-item');
const add_button = document.querySelector('.add-button');
const list_content = document.querySelector('.list-content');
const form = document.querySelector('.form');
// const deleteIcon = document.querySelector('.delete-icon');


add_button.addEventListener('click', function () {
    let temp = `<li class="list-item">
            <p>${list_content.value}</p>
            <i class="fa-solid fa-xmark delete-icon" style="color: #f61e33;"></i>
        </li>`;
    list.insertAdjacentHTML('beforeend', temp);
    list_content.value = "";
})

addList.addEventListener('click', function () {
    form.style.opacity = 100;
})

document.addEventListener('click', function (event) {
    if (!form.contains(event.target) && !addList.contains(event.target)) {
      form.style.opacity = 0;
    }
})

list.addEventListener('click', function (event) { 
    if (event.target && event.target.classList.contains('delete-icon')) {
      let listItem = event.target.closest('li');
      listItem.remove();
    }
})