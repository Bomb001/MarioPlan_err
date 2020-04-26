const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'blar blar blar' },
        { id: '2', title: 'collect all the stars', content: 'blar blar blar' },
        { id: '3', title: 'eff hunt with Bomb+', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
    return state
}

export default projectReducer