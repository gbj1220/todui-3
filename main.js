const readline = require('readline')
const data = require('./data.js')
const todos = data.todos


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`

const remove = (selection) => {
  console.log(selection)
  todos.splice(Number(selection) - 1, 1)
  toDoList()
  interface.question(menu, select)
}
const toDoList = () => {
  console.clear()
  console.log(`Here are your todo's:\n`)
  for (let i = 0; i < todos.length; i++) {
    console.log(i + 1 + '. ' + todos[i].text)
  }
}


const add = (userInput) => {
  const obj = {}
  obj.text = userInput;
  obj.isComplete = false;
  obj.priority = 2;
  todos.push(obj)
  toDoList(obj)
  interface.question(menu, select)
}


const select = (userInput) => {
  switch (userInput) {

    case '1':
      console.clear()
      toDoList()
      interface.question(`\nWhat should go on your todo list?\n`, add)
      break;

    case '2':
      console.clear()
      toDoList()
      interface.question(`\nWhich todo would you like to remove?\n`, remove)
      break;

    case '3':2
      console.log(`This feature is under construction. Check back later!`)
      interface.question(menu, select)
      break;

    case '4':
      console.log(`This feature is under construction. Check back later!`)
      interface.question(menu, select)
      break;

    case '5':
      console.log(`This feature is under construction. Check back later!`)
      interface.question(menu, select)
      break;

    case '6':
      console.log(`Quitting!`)
      interface.close()
      break;
  }
};
toDoList()
interface.question(menu, select)