const fs = require('node:fs');

fs.readFile("data.json", (err, data) => {
    if (err === null) {
        const json = JSON.parse(data);
        let temp = -Infinity;
        for (const item of json) {
            if (item.rate > temp) {
                temp = item.rate;
            }
        }
        text = 'Максимальний курс:' + temp;
        fs.writeFile("output.txt", text, (err) => {
            if (err === null) {
                console.log("Done!");
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err)
    }
});

