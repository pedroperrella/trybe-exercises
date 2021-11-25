function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
let days = document.querySelector('#days');

for(let i = 0; i < dezDaysList.length; i += 1) {
    let dayList = document.createElement('li');
    if(dezDaysList[i] === 24 || dezDaysList[i] === 31) {
        dayList.innerHTML = dezDaysList[i];
        dayList.className = 'day holiday';
        days.appendChild(dayList);
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
        dayList.innerHTML = dezDaysList[i];
        dayList.className = 'day friday';
        days.appendChild(dayList);
    } else if (dezDaysList[i] === 25) {
        dayList.innerHTML = dezDaysList[i];
        dayList.className = 'day holiday friday';
        days.appendChild(dayList);
    } else {
        dayList.innerHTML = dezDaysList[i];
        dayList.className = 'day';
        days.appendChild(dayList);
    }
}
}

createDays();

function createButton (holidays) {
let button = document.querySelector('.buttons-container');

let newButton = document.createElement('button');
newButton.id = 'btn-holiday';
newButton.innerText = holidays;
button.appendChild(newButton);

}

createButton('HOLIDAYS');

function changeColor () {
let buttonHolidays = document.querySelector('#btn-holiday');
let classHolidays = document.querySelectorAll('.holiday');

buttonHolidays.addEventListener('click', clickBackground);

function clickBackground () {
    for (let i = 0; i < classHolidays.length; i += 1) {
        if (classHolidays[i].style.backgroundColor === 'orange') {
            classHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            classHolidays[i].style.backgroundColor = 'orange';
        }
    }
}
}

changeColor();

function createFridayButton (friday) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    
    buttonFriday.innerHTML = friday;
    buttonFriday.id = 'btn-friday';
    buttonsContainer.appendChild(buttonFriday);
}

createFridayButton ('Sexta-feira');

function changeFriday () {
    let clickFriday = document.querySelector('#btn-friday');
    let classFridays = document.getElementsByClassName('friday');

    clickFriday.addEventListener('click', clickBackground);
    
    function clickBackground () {
        for (let i = 0; i < classFridays.length; i += 1) {  
            if(classFridays[i].innerText !== 'SEXTA-FEIRA!!!') {
                classFridays[i].innerText = 'SEXTA-FEIRA!!!';
            } else {
                classFridays[i].innerText = fridayDays[i];
            }
    }
    }
}  
let fridayDays = [4, 11, 18, 25];
changeFriday(fridayDays);

function mouseOver() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', mouseOverFunction);

    function mouseOverFunction(event) {
        event.target.style.fontSize = '25px';
    }
}

function mouseOut() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', mouseOutFunction);

    function mouseOutFunction(event) {
        event.target.style.fontSize = '20px';
    }
}

mouseOver()
mouseOut()

function addTask(task) {
    let newTask = document.createElement('spam');
    let tasksContainer = document.querySelector('.my-tasks');

    newTask.innerText = task;
    tasksContainer.appendChild(newTask)
}

addTask('Finalizar o projeto')

function subtitle(color) {
    let tasksContainer = document.querySelector('.my-tasks');

    let subtitleColor = document.createElement('div');
    subtitleColor.className = 'task';
    subtitleColor.style.backgroundColor = color;

    tasksContainer.appendChild(subtitleColor);
}

subtitle('blue');

function addEvent() {
    let selectedTasks = document.getElementsByClassName('task selected');
    let tagDiv = document.querySelector('.task');
    tagDiv.addEventListener('click', function(event) {
        if(selectedTasks.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    })
}   

addEvent();

function addEventColor(){
    let colorTask = document.getElementsByClassName('task selected');
    let classDays = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    classDays.addEventListener('click', function(event) {
        let clickColor = event.target.style.color;
        if(colorTask.length > 0 && clickColor !== taskColor) {
            let color = colorTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (clickColor === taskColor && colorTask.length > 0) {
            event.target.style.color = 'rgb(119,119,119) ';
        }
    })
}

addEventColor();