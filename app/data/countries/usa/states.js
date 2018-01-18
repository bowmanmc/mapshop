const selector = function(key, val) {
    return { key: key, val: val };
};

const states = function() {
    return {
        high: 'countries/usa/cb_2015_us_state_500k.json',
        medium: 'countries/usa/cb_2015_us_state_5m.json',
        low: 'countries/usa/cb_2015_us_state_20m.json'
    };
};

const counties = function() {
    return {
        high: 'countries/usa/cb_2016_us_county_500k.json',
        medium: 'countries/usa/cb_2016_us_county_5m.json',
        low: 'countries/usa/cb_2016_us_county_20m.json'
    }
};

export default {
    'usa-ak': {
        name: 'Alaska',
        idcol: 'GEOID',
        selector: selector('STATEFP', '02'),
        files: {
            high: 'countries/usa/cb_2015_us_state_5m.json',
            medium: 'countries/usa/cb_2015_us_state_20m.json'
        }
    },
    'usa-ak-counties': {
        name: 'Alaska Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '02'),
        files: {
            high: 'countries/usa/cb_2016_us_county_5m.json',
            medium: 'countries/usa/cb_2016_us_county_20m.json'
        }
    },
    'usa-al': {
        name: 'Alabama',
        idcol: 'GEOID',
        selector: selector('STATEFP', '01'),
        files: states()
    },
    'usa-al-counties': {
        name: 'Alabama Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '01'),
        files: counties()
    },
    'usa-ar': {
        name: 'Arkansas',
        idcol: 'GEOID',
        selector: selector('STATEFP', '05'),
        files: states()
    },
    'usa-ar-counties': {
        name: 'Arkansas Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '05'),
        files: counties()
    },
    'usa-az': {
        name: 'Arizona',
        idcol: 'GEOID',
        selector: selector('STATEFP', '04'),
        files: states()
    },
    'usa-az': {
        name: 'Arizona Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '04'),
        files: counties()
    },
    'usa-ca': {
        name: 'California',
        idcol: 'GEOID',
        selector: selector('STATEFP', '06'),
        files: states()
    },
    'usa-ca-counties': {
        name: 'California Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '06'),
        files: counties()
    },
    'usa-co': {
        name: 'Colorado',
        idcol: 'GEOID',
        selector: selector('STATEFP', '08'),
        files: states()
    },
    'usa-co-counties': {
        name: 'Colorado Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '08'),
        files: counties()
    },
    'usa-ct': {
        name: 'Connecticut',
        idcol: 'GEOID',
        selector: selector('STATEFP', '09'),
        files: states()
    },
    'usa-ct-counties': {
        name: 'Connecticut Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '09'),
        files: counties()
    },
    'usa-dc': {
        name: 'District of Columbia (Washington D.C.)',
        idcol: 'GEOID',
        selector: selector('STATEFP', '11'),
        files: states()
    },
    'usa-de': {
        name: 'Delaware',
        idcol: 'GEOID',
        selector: selector('STATEFP', '10'),
        files: states()
    },
    'usa-de-counties': {
        name: 'Delaware Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '10'),
        files: counties()
    },
    'usa-fl': {
        name: 'Florida',
        idcol: 'GEOID',
        selector: selector('STATEFP', '12'),
        files: states()
    },
    'usa-fl-counties': {
        name: 'Florida Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '12'),
        files: counties()
    },
    'usa-ga': {
        name: 'Georgia',
        idcol: 'GEOID',
        selector: selector('STATEFP', '13'),
        files: states()
    },
    'usa-ga-counties': {
        name: 'Georgia Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '13'),
        files: counties()
    },
    'usa-hi': {
        name: 'Hawaii',
        idcol: 'GEOID',
        selector: selector('STATEFP', '15'),
        files: {
            high: 'countries/usa/cb_2015_us_state_5m.json',
            medium: 'countries/usa/cb_2015_us_state_20m.json'
        }
    },
    'usa-hi-counties': {
        name: 'Hawaii Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '15'),
        files: {
            high: 'countries/usa/cb_2016_us_county_5m.json',
            medium: 'countries/usa/cb_2016_us_county_20m.json'
        }
    },
    'usa-ia': {
        name: 'Iowa',
        idcol: 'GEOID',
        selector: selector('STATEFP', '19'),
        files: states()
    },
    'usa-ia-counties': {
        name: 'Iowa Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '19'),
        files: counties()
    },
    'usa-id': {
        name: 'Idaho',
        idcol: 'GEOID',
        selector: selector('STATEFP', '16'),
        files: states()
    },
    'usa-id-counties': {
        name: 'Idaho Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '16'),
        files: counties()
    },
    'usa-il': {
        name: 'Illinois',
        idcol: 'GEOID',
        selector: selector('STATEFP', '17'),
        files: states()
    },
    'usa-il-counties': {
        name: 'Illinois Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '17'),
        files: counties()
    },
    'usa-in': {
        name: 'Indiana',
        idcol: 'GEOID',
        selector: selector('STATEFP', '18'),
        files: states()
    },
    'usa-in-counties': {
        name: 'Indiana Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '18'),
        files: counties()
    },
    'usa-ks': {
        name: 'Kansas',
        idcol: 'GEOID',
        selector: selector('STATEFP', '20'),
        files: states()
    },
    'usa-ks-counties': {
        name: 'Kansas Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '20'),
        files: counties()
    },
    'usa-ky': {
        name: 'Kentucky',
        idcol: 'GEOID',
        selector: selector('STATEFP', '21'),
        files: states()
    },
    'usa-ky-counties': {
        name: 'Kentucky Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '21'),
        files: counties()
    },
    'usa-la': {
        name: 'Louisiana',
        idcol: 'GEOID',
        selector: selector('STATEFP', '22'),
        files: states()
    },
    'usa-la-counties': {
        name: 'Louisiana Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '22'),
        files: counties()
    },
    'usa-ma': {
        name: 'Massachusetts',
        idcol: 'GEOID',
        selector: selector('STATEFP', '25'),
        files: states()
    },
    'usa-ma-counties': {
        name: 'Massachusetts Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '25'),
        files: counties()
    },
    'usa-md': {
        name: 'Maryland',
        idcol: 'GEOID',
        selector: selector('STATEFP', '24'),
        files: states()
    },
    'usa-md-counties': {
        name: 'Maryland Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '24'),
        files: counties()
    },
    'usa-me': {
        name: 'Maine',
        idcol: 'GEOID',
        selector: selector('STATEFP', '23'),
        files: states()
    },
    'usa-me-counties': {
        name: 'Maine Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '23'),
        files: counties()
    },
    'usa-mi': {
        name: 'Michigan',
        idcol: 'GEOID',
        selector: selector('STATEFP', '26'),
        files: states()
    },
    'usa-mi-counties': {
        name: 'Michigan Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '26'),
        files: counties()
    },
    'usa-mn': {
        name: 'Minnesota',
        idcol: 'GEOID',
        selector: selector('STATEFP', '27'),
        files: states()
    },
    'usa-mn-counties': {
        name: 'Minnesota Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '27'),
        files: counties()
    },
    'usa-mo': {
        name: 'Missouri',
        idcol: 'GEOID',
        selector: selector('STATEFP', '29'),
        files: states()
    },
    'usa-mo-counties': {
        name: 'Missouri Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '29'),
        files: counties()
    },
    'usa-ms': {
        name: 'Mississippi',
        idcol: 'GEOID',
        selector: selector('STATEFP', '28'),
        files: states()
    },
    'usa-ms-counties': {
        name: 'Mississippi Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '28'),
        files: counties()
    },
    'usa-mt': {
        name: 'Montana',
        idcol: 'GEOID',
        selector: selector('STATEFP', '30'),
        files: states()
    },
    'usa-mt-counties': {
        name: 'Montana Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '30'),
        files: counties()
    },
    'usa-nc': {
        name: 'North Carolina',
        idcol: 'GEOID',
        selector: selector('STATEFP', '37'),
        files: states()
    },
    'usa-nc-counties': {
        name: 'North Carolina Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '37'),
        files: counties()
    },
    'usa-nd': {
        name: 'North Dakota',
        idcol: 'GEOID',
        selector: selector('STATEFP', '38'),
        files: states()
    },
    'usa-nd-counties': {
        name: 'North Dakota Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '38'),
        files: counties()
    },
    'usa-ne': {
        name: 'Nebraska',
        idcol: 'GEOID',
        selector: selector('STATEFP', '31'),
        files: states()
    },
    'usa-ne-counties': {
        name: 'Nebraska',
        idcol: 'GEOID',
        selector: selector('STATEFP', '31'),
        files: counties()
    },
    'usa-nh': {
        name: 'New Hampshire',
        idcol: 'GEOID',
        selector: selector('STATEFP', '33'),
        files: states()
    },
    'usa-nh-counties': {
        name: 'New Hampshire Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '33'),
        files: counties()
    },
    'usa-nj': {
        name: 'New Jersey',
        idcol: 'GEOID',
        selector: selector('STATEFP', '34'),
        files: states()
    },
    'usa-nj-counties': {
        name: 'New Jersey Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '34'),
        files: counties()
    },
    'usa-nm': {
        name: 'New Mexico',
        idcol: 'GEOID',
        selector: selector('STATEFP', '35'),
        files: states()
    },
    'usa-nm-counties': {
        name: 'New Mexico Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '35'),
        files: counties()
    },
    'usa-nv': {
        name: 'Nevada',
        idcol: 'GEOID',
        selector: selector('STATEFP', '32'),
        files: states()
    },
    'usa-nv-counties': {
        name: 'Nevada Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '32'),
        files: counties()
    },
    'usa-ny': {
        name: 'New York',
        idcol: 'GEOID',
        selector: selector('STATEFP', '36'),
        files: states()
    },
    'usa-ny-counties': {
        name: 'New York Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '36'),
        files: counties()
    },
    'usa-oh': {
        name: 'Ohio',
        idcol: 'GEOID',
        selector: selector('STATEFP', '39'),
        files: states()
    },
    'usa-oh-counties': {
        name: 'Ohio Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '39'),
        files: counties()
    },
    'usa-ok': {
        name: 'Oklahoma',
        idcol: 'GEOID',
        selector: selector('STATEFP', '40'),
        files: states()
    },
    'usa-ok-counties': {
        name: 'Oklahoma Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '40'),
        files: counties()
    },
    'usa-or': {
        name: 'Oregon',
        idcol: 'GEOID',
        selector: selector('STATEFP', '41'),
        files: states()
    },
    'usa-or-counties': {
        name: 'Oregon Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '41'),
        files: counties()
    },
    'usa-pa': {
        name: 'Pennsylvania',
        idcol: 'GEOID',
        selector: selector('STATEFP', '42'),
        files: states()
    },
    'usa-pa-counties': {
        name: 'Pennsylvania Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '42'),
        files: counties()
    },
    'usa-pr': {
        name: 'Puerto Rico',
        idcol: 'GEOID',
        selector: selector('STATEFP', '72'),
        files: states()
    },
    'usa-pr-counties': {
        name: 'Puerto Rico Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '72'),
        files: counties()
    },
    'usa-ri': {
        name: 'Rhode Island',
        idcol: 'GEOID',
        selector: selector('STATEFP', '44'),
        files: states()
    },
    'usa-ri-counties': {
        name: 'Rhode Island Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '44'),
        files: counties()
    },
    'usa-sc': {
        name: 'South Carolina',
        idcol: 'GEOID',
        selector: selector('STATEFP', '45'),
        files: states()
    },
    'usa-sc-counties': {
        name: 'South Carolina Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '45'),
        files: counties()
    },
    'usa-sd': {
        name: 'South Dakota',
        idcol: 'GEOID',
        selector: selector('STATEFP', '46'),
        files: states()
    },
    'usa-sd-counties': {
        name: 'South Dakota Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '46'),
        files: counties()
    },
    'usa-tn': {
        name: 'Tennessee',
        idcol: 'GEOID',
        selector: selector('STATEFP', '47'),
        files: states()
    },
    'usa-tn-counties': {
        name: 'Tennessee Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '47'),
        files: counties()
    },
    'usa-tx': {
        name: 'Texas',
        idcol: 'GEOID',
        selector: selector('STATEFP', '48'),
        files: states()
    },
    'usa-tx-counties': {
        name: 'Texas Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '48'),
        files: counties()
    },
    'usa-ut': {
        name: 'Utah',
        idcol: 'GEOID',
        selector: selector('STATEFP', '49'),
        files: states()
    },
    'usa-ut-counties': {
        name: 'Utah Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '49'),
        files: counties()
    },
    'usa-va': {
        name: 'Virginia',
        idcol: 'GEOID',
        selector: selector('STATEFP', '51'),
        files: states()
    },
    'usa-va-counties': {
        name: 'Virginia Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '51'),
        files: counties()
    },
    'usa-vt': {
        name: 'Vermont',
        idcol: 'GEOID',
        selector: selector('STATEFP', '50'),
        files: states()
    },
    'usa-vt-counties': {
        name: 'Vermont Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '50'),
        files: counties()
    },
    'usa-wa': {
        name: 'Washington',
        idcol: 'GEOID',
        selector: selector('STATEFP', '53'),
        files: states()
    },
    'usa-wa-counties': {
        name: 'Washington Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '53'),
        files: counties()
    },
    'usa-wi': {
        name: 'Wisconsin',
        idcol: 'GEOID',
        selector: selector('STATEFP', '55'),
        files: states()
    },
    'usa-wi-counties': {
        name: 'Wisconsin Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '55'),
        files: counties()
    },
    'usa-wv': {
        name: 'West Virginia',
        idcol: 'GEOID',
        selector: selector('STATEFP', '54'),
        files: states()
    },
    'usa-wv-counties': {
        name: 'West Virginia Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '54'),
        files: counties()
    },
    'usa-wy': {
        name: 'Wyoming',
        idcol: 'GEOID',
        selector: selector('STATEFP', '56'),
        files: states()
    },
    'usa-wy-counties': {
        name: 'Wyoming Counties',
        idcol: 'GEOID',
        selector: selector('STATEFP', '56'),
        files: counties()
    }
}
