let nextTodoId = 0
export const addTask = (text) => {
    return {
        type: 'ADDTASK',
        id: nextTodoId++,
        text
    }
}

