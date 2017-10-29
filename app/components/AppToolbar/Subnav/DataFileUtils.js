import firstline from 'firstline';
import fs from 'fs';


let guessFunction = function(columns, guesses, defaultGuess) {
    if (!columns || !columns.length || columns.length < 1) {
        return defaultGuess;
    }

    for (let i = 0; i < columns.length; i++) {
        let col = columns[i];
        for (let j = 0; j < guesses.length; j++) {
            let guess = guesses[j];
            if (col.label.toUpperCase() === guess) {
                return col.value;
            }
        };
    };

    return defaultGuess;
};

export default {
    getColumns(filepath) {
        return new Promise((resolve, reject) => {
            let results = [];

            // is there a dataFile present?
            if (!filepath || !fs.existsSync(filepath)) {
                console.log(`DATA ERROR: Can't read ${filepath}`);
                resolve([]);
                return;
            }

            firstline(filepath).then(line => {
                let columns = [];
                let parts = line.split(',');
                for (let i = 0; i < parts.length; i++) {
                    columns.push({
                        label: parts[i].trim(),
                        value: i
                    });
                }
                resolve(columns);
            });
        });
    },

    guessLatitudeColumn(columns) {
        const guesses = ['LATITUDE', 'LATITUDES', 'LAT', 'LATS', 'LT', 'LTS'];
        return guessFunction(columns, guesses, -1);
    },

    guessLongitudeColumn(columns) {
        const guesses = ['LONGITUDE', 'LONGITUDES', 'LON', 'LONS', 'LONG', 'LONGS', 'LNG', 'LNGS'];
        return guessFunction(columns, guesses, -1);
    }
}
