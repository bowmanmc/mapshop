import fs from 'fs';
import moment from 'moment';


export default {

    load(filepath, latColumn, lonColumn) {
        let result = [];

        // Make sure we can read from filepath
        if (!filepath || !fs.existsSync(filepath) || fs.accessSync(filepath, fs.constants.R_OK)) {
            //console.log(`Can't read from ${filepath}`);
            return result;
        }

        // Make sure we have something reasonable for lat/lon columns
        if ((typeof latColumn === 'undefined') || latColumn < 0 ||
            (typeof lonColumn === 'undefined') || lonColumn < 0) {
            //console.log(`Invalid lat/lon columns ${latColumn}/${lonColumn}`);
            return result;
        }

        const startTime = moment();

        const lines = fs.readFileSync(filepath).toString().split('\n');
        let points = [];
        lines.forEach(line => {
            try {
                const cols = line.split(',');
                const lat = Number(cols[latColumn]);
                const lon = Number(cols[lonColumn]);
                //console.log(`Adding point: ${lat} x ${lon}`);
                if (!isNaN(lat) && !isNaN(lon)) {
                    points.push({
                        lat: lat,
                        lon: lon
                    });
                }
            }
            catch(err) {} // expect there to be an error or two here
        });

        const endTime = moment();
        const duration = endTime.diff(startTime);
        console.log(`Read ${points.length} points from ${filepath} in ${duration}ms.`);

        return points;
    }

}
