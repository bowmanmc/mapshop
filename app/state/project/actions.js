export const types = {
    PROJECT_CLOSE: 'PROJECT_CLOSE',
      PROJECT_NEW: 'PROJECT_NEW'
};

export const newProject = () => ({
    type: types.PROJECT_NEW
});

export const closeProject = () => ({
    type: types.PROJECT_CLOSE
});
