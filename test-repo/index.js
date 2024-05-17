import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-3-fd720-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

console.log(app)

const inputFieldEl = document.getElementById("inpuet-field")
const addbuttonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addbuttonEl.addEventListener("onclick", function () {
    let inputValue = inputFieldEl.value 

    PushManager(shoppingListInDB, inputValue)

    shoppingListEl.innerHTML += `<li>${inputValue}</li>`
}) 