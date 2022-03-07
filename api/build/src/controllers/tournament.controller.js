"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTournaments = void 0;
const models_1 = require("../models");
const getTournaments = (req, res) => {
    const tournaments = models_1.tournament.findAll();
    res.send(tournaments);
};
exports.getTournaments = getTournaments;
//# sourceMappingURL=tournament.controller.js.map