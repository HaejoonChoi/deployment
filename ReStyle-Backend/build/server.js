"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// local dbKey.ts file is required, not pushed to gitHub for security reasons
var dbKey_1 = require("./dbKey");
var app = express_1.default();
// -----TEST DATABASE CONNECTION-------------------------------------------------------------
// this is an example used to test connection between node.js server and PostgreSQL database
var pg_1 = require("pg");
var client = new pg_1.Client({
    connectionString: dbKey_1.connectionString,
});
client.connect();
client.query('SELECT t.* FROM dev.restyle_user t LIMIT 501', function (err, res) {
    console.log(res.rows);
    client.end();
});
// --------------------------------------------------------------------------------------------
app.use('/', express_1.default.static('./ReStyle-Frontend/dist/ReStyle'));
// this is an example used to test sending simple data to the front end
app.get('/ajax', function (req, res) {
    res.send({ 'text': 'hello angular' });
});
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log("Application is listening on port" + port + "!");
});
