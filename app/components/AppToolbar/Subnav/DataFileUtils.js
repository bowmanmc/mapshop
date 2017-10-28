import firstline from 'firstline';
import fs from 'fs';


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
    }

}
