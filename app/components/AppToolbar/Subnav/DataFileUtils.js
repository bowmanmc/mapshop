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
            if (col.label.toUpperCase().includes(guess)) {
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
                        label: `Column #${i + 1} (${parts[i].trim()})`,
                        value: i
                    });
                }
                resolve(columns);
            });
        });
    },

    guessLatitudeColumn(columns) {
        // We wrap the first line with parens
        const guesses = ['(LATITUDE', '(LAT', '(LT'];
        return guessFunction(columns, guesses, -1);
    },

    guessLongitudeColumn(columns) {
        // We wrap the first line with parens
        const guesses = ['(LONGITUDE', '(LON', '(LONG', '(LNG'];
        return guessFunction(columns, guesses, -1);
    }
}
