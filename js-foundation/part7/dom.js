// example 1

document
  .getElementById(`changeTextButton`)
  .addEventListener(`click`, function () {
    document.getElementById(
      `myParagraph`
    ).textContent = `The paragraph is changed`;
  });

// example 2
document
  .getElementById(`highlightFirstCity`)
  .addEventListener(`click`, function () {
    document
      .getElementById(`citiesList`)
      .firstElementChild.classList.add(`highlight`);
  });

// example 3
document.getElementById(`changeOrder`).addEventListener(`click`, function () {
  let coffeeType = document.getElementById(`coffeeType`);
  coffeeType.textContent = `Espresso`;
  coffeeType.style.color = `brown`;
});

//exaample 4
document.getElementById(`addNewItem`).addEventListener("click", function () {
  let newItem = document.createElement(`li`);
  newItem.textContent = `Eggs`;
  document.getElementById(`shoppingList`).appendChild(newItem);
});

// example 5
document
  .getElementById(`removeLastTask`)
  .addEventListener(`click`, function () {
    let tasklist = document.getElementById(`taskList`);
    tasklist.lastElementChild.remove();
  });

// example 6
document
  .getElementById(`clickMeButton`)
  .addEventListener(`dblclick`, function () {
    alert(`hi there`);
  });

// example 7
document.getElementById(`teaList`).addEventListener(`click`, function (event) {
  if (event.target && event.target.matches(`.teaItem`)) {
    event.target.classList.add(`highlight`);
    // alert(`you selected: ` + event.target.textContent);
  }
});

// example 8
document
  .getElementById(`feedbackForm`)
  .addEventListener(`submit`, function (event) {
    event.preventDefault();
    let feedback = document.getElementById(`feedbackInput`).value;
    document.getElementById(
      `feedbackDisplay`
    ).textContent = `feedback is: ${feedback}`;
  });

// example 9
document.addEventListener(`DOMContentLoaded`, function () {
  document.getElementById(`domStatus`).textContent = `dom is fully loaded`;
});

//example 10
document
  .getElementById(`toggleHighlight`)
  .addEventListener(`click`, function () {
    let description = document.getElementById(`descriptionText`);
    description.classList.toggle(`highlight`);
  });
