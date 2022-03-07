"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTournaments = void 0;
const getTournaments = (req, res) => {
    const results = res.paginatedResults;
    res.send(results);
};
exports.getTournaments = getTournaments;
//# sourceMappingURL=tournament.controller.js.map