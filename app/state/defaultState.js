export default {
    basemap: {
        mapId: 'usa-counties',
        fillColor: '#b1e5d9',
        strokeColor: '#000000',
        strokeWidth: 1
    },
    data: {
        filename: 'skyline.csv',
        filepath: 'data',
        renderType: 'dot',
        dotRadius: 3,
        dotColor: '#226699',
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
