const initState = {
    projects: [
        {id:1, title:'get some food', content: 'blah blah blah'},
        {id:2, title:'play video games', content: 'blah blah blah'},
        {id:3, title:'skip ropes with the kids', content: 'blah blah blah'}
    ]
};

const projectReducer = (state=initState, action) => {
    switch(action.type){
        case 'ADD_PROJECT':    
        case 'ADD_PROJECT_ERROR':     
            return state;
        default:
            return state;
    }
    
}
 
export default projectReducer;