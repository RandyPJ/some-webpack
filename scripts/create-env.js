const fs = require("fs");

fs.writeFileAsync("./.env", `API=${process.env.API}\n`);
