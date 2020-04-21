export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => { 
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_PROJECT', project})
        }).catch((error) => {
            dispatch({type: 'ADD_PROJECT_ERROR', error})
        })
    }
}