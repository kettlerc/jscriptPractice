let input = prompt('what would you like to do?');
const todos = ['first todo', 'second todo'];
while (input !== 'quit') {
    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('**********')
    } else if (input === 'new') {
        const newToDo = prompt('type your new todo');
        todos.push(newToDo);
        console.log(`${newToDo} has been added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('ok which todo do you want to delete?'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} has been removed from your list!`);
        } else {
            console.log('unknown index...')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('ok goodbye!')