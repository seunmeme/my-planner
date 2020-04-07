export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => { 
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Seun',
            authorLastName: 'Odewale',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_PROJECT', project})
        }).catch((error) => {
            dispatch({type: 'ADD_PROJECT_ERROR', error})
        })
    }
}