const INITIAL_STATE = { form: { description: '' }, list: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_FORM_DESCRIPTION':
            return { ...state, form: { description: action.payload } }
        case 'LOAD_TASKS':
            return { ...state, list: action.payload.data }
        case 'CREATE_TASK':
            return { ...state, form: { description: '' } }
        default:
            return state;
    }
}