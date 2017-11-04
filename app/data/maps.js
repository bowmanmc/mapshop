import States from './countries/usa/states';


const USA = {
    'usa-counties': {
        name: 'USA - Counties',
        projection: 'albers',
        idcol: 'GEOID',
        files: {
            //high: 'countries/usa/cb_2016_us_county_500k.json',
            high: 'countries/usa/cb_2016_us_county_5m.json',
            medium: 'countries/usa/cb_2016_us_county_20m.json'
        }
    },
    'usa-states': {
        name: 'USA - States',
        projection: 'albers',
        idcol: 'GEOID',
        files: {
            //high: 'countries/usa/cb_2015_us_state_500k.json',
            high: 'countries/usa/cb_2015_us_state_5m.json',
            medium: 'countries/usa/cb_2015_us_state_20m.json'
        }
    }
}

export default Object.assign({}, USA, States);
