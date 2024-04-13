"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTime = void 0;
var convertTime = function (time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (seconds < 10) {
        return "".concat(minutes, ":0").concat(seconds);
    }
    return "".concat(minutes, ":").concat(seconds);
};
exports.convertTime = convertTime;
