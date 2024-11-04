"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nREPLClient = void 0;
var net_1 = require("net");
var nREPLClient = /** @class */ (function () {
    function nREPLClient(port) {
        this.socket = net_1.default.connect({ port: port });
    }
    nREPLClient.prototype.clone = function () { };
    nREPLClient.prototype.eval = function (code) { };
    nREPLClient.prototype.describe = function () { };
    return nREPLClient;
}());
exports.nREPLClient = nREPLClient;
