const newTAsk = document.querySelector('.new-task-input');//dom item to will program items
const addTaskBtn = document.querySelector('.add-task-btn')
const removeComplateBtn = document.querySelector('.remove-complate-btn');
const taskList = document.querySelector('.task-list');
const template = document.querySelector('.task-template');
let id = 1;//start with 1 and iterate with each text(new)
//up side set oujr setup

newTAsk.addEventListener('keyup', (e) => {
    if(e.keyCode === 13 && inputvalid()){//if e.keycode equal to 13(13 key code for enter key)
        addTask();//we looking for  press of the enter button it say basicly if text nuber bigger than 13 dont creat new text
    }//and input is valid add task
});

addTaskBtn.addEventListener('click', (e) => {
    if(inputvalid()){//if button was clicked inputvalid is true thane run the add task funktion
        addTask();
    }
});

removeComplateBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');// cuz we want delete all previus text
    tasks.forEach(task => {
        const checked = task.querySelector('input').checked;//cheked put self to task to delete with self
        if(checked){// if click clear button all task delte
            task.remove();
        }
    })
}); 

function addTask(){//this is main function of the page here we creat new page
    const taskElement = document.importNode(template.content, true);
    const checkbox = taskElement.querySelector('input');// we hook element in temlate
    checkbox.id = id;// we add id to checkbox
    const label = taskElement.querySelector('label');
    label.htmlFor = id;//we lebeled checkbox use htmlfor
    label.append(newTAsk.value);//we add task in label
    taskList.appendChild(taskElement);
    newTAsk.value = "";//new page shoult be emty to write
    id++;//this give a unique id for each text
}

function inputvalid(){// input valuedation it check the text if chect emty turn false and stop creat new task
    return newTAsk.value !== ""
}