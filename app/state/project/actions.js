export const types = {
     PROJECT_EDIT: 'PROJECT_EDIT'
};


export const editProject = (newProject) => ({
    type: types.PROJECT_EDIT,
    project: newProject
});
