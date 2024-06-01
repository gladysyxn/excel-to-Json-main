import express from 'express';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

import routes from './routes/routes.js'; 
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
