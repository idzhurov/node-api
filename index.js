let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    todoRoutes = require('./api/todos'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes);

app.listen(port, function () {
    console.log(`Express server running on ${port}!`);
});