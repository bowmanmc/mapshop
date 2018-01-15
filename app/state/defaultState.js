export default {
    basemap: {
        mapId: 'usa-oh',
        resolution: 'medium',
        fillColor: '#b1e5d9',
        strokeColor: '#000000',
        strokeWidth: 1
    },
    data: {
        filepath: null,
        //filepath: '/Users/michael/projects/maptop/app/data/datasets/skyline.oh.csv',
        //filepath: '/Users/michael/projects/maptop/app/data/datasets/aca-unemployment-rate.csv',
        renderType: 'choropleth',
        dotConstrainToMap: true,
        dotRadius: 3,
        dotColor: '#4e5b66',
        dotColumnLatitude: 0,
        dotColumnLongitude: 1,
        choroplethColorRamp: 'schemeGreys',
        choroplethGeoType: 'STUSPS',
        choroplethNumClasses: 5,
        choroplethColumnGeo: 1,
        choroplethColumnValue: 3
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
