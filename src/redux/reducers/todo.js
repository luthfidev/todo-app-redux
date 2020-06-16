const initialState = {
    task: []
}

const todo = (state=initialState, action) => {
    switch(action.type){
        case 'ADDTASK': {
            return [
                ...state,
                {
                  id: action.id,
                  text: action.text,
                }
              ]
            break
        }

        default: {
            return {
                ...state
            }
        }
    }
}