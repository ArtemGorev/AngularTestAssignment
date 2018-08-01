const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/signin', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        const error = "please provide 'email' and 'password'";
        return res
            .status(400)
            .send(400, {
                error
            });
    }

    if (email !== 'user@user.com' && password !== 'demo') {
        const error = "please provide correct 'email' and 'password'";
        return res
            .status(400)
            .send({
                error
            });
    }

    const status = "ok";
    return res
        .status(200)
        .send({
            status
        })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
