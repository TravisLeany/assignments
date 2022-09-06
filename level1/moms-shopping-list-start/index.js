// title

document.createElement("title")



const newItemText = document.querySelector('#title')
const addNewItemConst = document.querySelector('#addNewItem')
const ulGroceries = document.querySelector('#list')
ulGroceries.style.flexDirection = "column"
ulGroceries.style.display = "flex"

addNewItemConst.addEventListener("click", function(e){
    e.preventDefault();
    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'groceryLi')
    // needs to be in a <div>   newGrocery.textContent = newItemText.value
    // needs to be in a <div>   ulGroceries.style.backgroundColor = "yellow"
    ulGroceries.append(newLi)
    const liContent = document.createElement('div')
    liContent.textContent = newItemText.value
    liContent.style.marginBottom = "10px"
    liContent.style.textAlign = "center"
    const newEditButton = document.createElement('button')
    newEditButton.setAttribute('class', "hNewEditButton")
    newEditButton.textContent = "edit"
    newEditButton.style.listStyleType
    const blankForm = document.querySelector('#title')
    blankForm.textContent=""

    const newXButton = document.createElement('button')
    // newXButton.classList.add("input")
        newXButton.addEventListener("click", function clear(e) {
            if(e.target.classList.contains("input")){
                e.target.closest("li").remove()
            }
        })
    // newXButton.setAttribute('id', 'hNewXButton')
    newXButton.textContent = "X"
    newEditButton.style.margin = "2px"
    newXButton.style.margin = "2px"

    newEditButton.style.listStyleType = "none"
    newXButton.style.listStyleType = "none"
    newLi.append(liContent, newEditButton, newXButton)

})