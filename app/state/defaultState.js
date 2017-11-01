export default {
    basemap: {
        mapId: 'usa-oh',
        fillColor: '#b1e5d9',
        strokeColor: '#000000',
        strokeWidth: 1
    },
    data: {
        // filepath: '/Users/michael/projects/maptop/app/data/datasets/skyline.oh.csv',
        filepath: null,
        renderType: 'dot',
        dotConstrainToMap: false,
        dotRadius: 3,
        dotColor: '#4e5b66',
        dotColumnLatitude: 0,
        dotColumnLongitude: 1,
        choroplethNumClasses: 7,
        choroplethColorRamp: []
    },
    project: {
        title: '2016 Unemployment by County',
        author: 'Michael Bowman',
        email: 'bowmanmc@gmail.com',
        company: 'Dayton Geoinformatics',
        dateCeated: null,
        lastUpdated: null
    }
}
