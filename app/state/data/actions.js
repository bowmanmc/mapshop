export const types = {
    DATA_EDIT: 'DATA_EDIT'
};


export const editData = (changes) => ({
    type: types.DATA_EDIT,
    changes: changes
});
