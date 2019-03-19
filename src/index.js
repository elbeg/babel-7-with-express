import express from "express";
import {AppRoutes} from "./routes/routes";

const app = express();
const port = 3000;

app.get('/hello', (req, res) => res.send('Hello World!'));

AppRoutes.map((r, i) => {
	console.log(r);
	app[r.method](r.path, (request, response, next) => {
        r.action(request, response);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
