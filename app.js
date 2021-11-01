const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000;

require('./database');
const commentRouter = require('./routers/comments');

app.use(cors());
app.use(express.json());

app.use('', commentRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
