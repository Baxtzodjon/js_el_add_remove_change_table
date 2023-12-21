let container = document.querySelector('.container')
let container2 = document.querySelector('.container2')

let form = document.querySelector('form');
let fromInput = form.querySelector('[placeholder="$100"]');
let toInput = form.querySelector('[placeholder="$500"]');
let showButton = form.querySelector('button');
let todos = []

let arr2 = [{
    "id": 1,
    "name": "Bruce Reyes",
    "born": 1997,
}, {
    "id": 2,
    "name": "Benjamin Dean",
    "born": 1194,
}, {
    "id": 3,
    "name": "Philip Lucas",
    "born": 1525,
}, {
    "id": 4,
    "name": "Jose Hill",
    "born": 4325,
}, {
    "id": 5,
    "name": "Jerry Andrews",
    "born": 683,
}, {
    "id": 6,
    "name": "Nicolas Lee",
    "born": 2798,
}, {
    "id": 7,
    "name": "Alan Wade",
    "born": 3586,
}]

form.onsubmit = (e) => {
    e.preventDefault()

    let fm = new FormData(form)

    let todo = {
        id: '1',
        title: fm.get('task'),
        born: fm.get('born'),
    }

    if (todo.title === "") {
        alert('Error')
        return
    }

    todos.push(todo)
    reload(todos, container2)
}

reload(todos, container2)

function reload(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        // append
        let table = document.createElement('table')
        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let td_name = document.createElement('td')
        let td_born = document.createElement('td')
        let td_img = document.createElement('td')
        let logo = document.createElement('img')
        let logo_img = document.createElement('img')

        // styling 
        table.classList.add('table')
        tbody.classList.add('tbody')
        tr.classList.add('tr')
        td_name.classList.add('td_name')
        td_born.classList.add('td_born')
        td_img.classList.add('td_img')
        logo.classList.add('img_edit')
        logo_img.classList.add('img_delete')

        logo.setAttribute('src', './img/edit_icon.png')
        logo_img.setAttribute('src', './img/delete_icon.gif')

        td.innerHTML = item.id
        td_name.innerHTML = item.title
        td_born.innerHTML = item.born

        // append 
        /* let body = document.body */
        /* container.append(table) */
        table.append(tbody)
        tbody.append(tr)
        tr.append(td, td_name, td_born, td_img)
        td_img.append(logo, logo_img)
        place.append(table)

        // function
        logo_img.onclick = () => {
            let isSure = confirm('Are you sure ?')

            if (isSure) {
                let idx = arr.indexOf(item)
                todos.splice(idx, 1)
                tbody.remove()
            }
        }

        td_name.ondblclick = () => {
            let newTitle = prompt('Write new title')

            if (newTitle !== null && newTitle.length > 0) {
                item.title = newTitle
                td_name.innerHTML = newTitle
            }
        }

        td_born.ondblclick = () => {
            let newTitle = prompt('Write new title')

            if (newTitle !== null && newTitle.length > 0) {
                item.title = newTitle
                td_born.innerHTML = newTitle
            }
        }

        td.ondblclick = () => {
            let newTitle = prompt('Write new title')

            if (newTitle !== null && newTitle.length > 0) {
                item.title = newTitle
                td.innerHTML = newTitle
            }
        }
    }
}
