let userArr = [
    {
        userID: 'sdasd',
        userName: 'Darek',
        userCity: 'Rudziniec',
        userAge: '19'
    },
    {
        userID: 'sgdfjghhfgg',
        userName: 'Bartek',
        userCity: 'Pyskowice',
        userAge: '22'
    },
    {
        userID: 'jkfgfhhj',
        userName: 'Kamil',
        userCity: 'Gliwice',
        userAge: '43'
    },
    {
        userID: 'asfsdsd',
        userName: 'Pablo',
        userCity: 'Zabrze',
        userAge: '17'
    },
]

const userName = document.querySelector('#name');
const userCity = document.querySelector('#city');
const userAge = document.querySelector('#age');
const addBtn = document.querySelector('#addBtn');
const form = document.querySelector('form');
const list = document.querySelector('#list');

function updateArr(arr = userArr){
    arr.forEach(element =>{
        const li = document.createElement('li')
        const btn = document.createElement('button')
        li.innerHTML = `<span> <strong>${element.userName}</strong> w wieku <strong>${element.userAge}</strong> z <strong>${element.userCity}</strong> </span>`;
        li.classList.add('list-group-item')
        btn.classList.add('btn', 'btn-outline-danger')
        btn.innerHTML = "X";
        btn.addEventListener('click', () =>{
            removeUser(person.userID);
        })
        li.append(btn)
        list.append(li)
    });
}
updateArr();

addBtn.addEventListener('click', evt => {

    let person = {
        userID: self.crypto.randomUUID(),
        userName: userName.value,
        userCity: userCity.value,
        userAge: userAge.value,
    }
    userArr.unshift(person)
    list.innerHTML = ""
    updateArr();
});

function removeUser(removeByID){
    userArr = userArr.filter((person) => person.userID !== removeByID);
    updateArr();
};
