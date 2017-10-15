export const types = {
    BASEMAP_EDIT: 'BASEMAP_EDIT'
};


export const editBasemap = (changes) => ({
    type: types.BASEMAP_EDIT,
    changes: changes
});
