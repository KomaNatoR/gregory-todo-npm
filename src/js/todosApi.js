export const createTodo = payLoad => { 
    console.log(payLoad);
    localStorage.setItem('todos', JSON.stringify(payLoad));
};
export const fetchTodos = () => { 
    try {
        return JSON.parse(localStorage.getItem('todos')) || [];
    } catch (error) {
        console.log('can`t load todos');
        return [];
    }
};
export const updateTodo = (payLoad) => { 
    localStorage.setItem('todos', JSON.stringify(payLoad));
};
export const deleteTodo = (payLoad) => { 
    localStorage.setItem('todos', JSON.stringify(payLoad));
};