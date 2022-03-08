"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTournaments = void 0;
const getTournaments = (req, res) => {
    const results = res.paginatedResults;
    setTimeout(() => {
        res.send(results);
    }, 1000);
};
exports.getTournaments = getTournaments;
//# sourceMappingURL=tournament.controller.js.map