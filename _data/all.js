require('dotenv').config();
const Airtable = require('airtable');

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appYe0LOfXUjF1OaL');

module.exports = () => {
    return new Promise((resolve, reject) => {
        let allData = [];
        base('Books')
            .select({ view: 'All' })
            .eachPage(
                function page(records, fetchNextPage) {
                    records.forEach((record) => {
                        allData.push({
                            "id" : record._rawJson.id,
                            ...record._rawJson.fields
                        });
                    });
                    fetchNextPage();
                },
                function done(err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(allData);
                    }
                }
            );
    });
};