export const types = {
     PROJECT_EDIT: 'PROJECT_EDIT'
};


export const editProject = (changes) => ({
    type: types.PROJECT_EDIT,
    changes: changes
});
