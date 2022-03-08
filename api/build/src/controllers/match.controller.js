"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatches = void 0;
const models_1 = require("../models");
const getMatches = (req, res) => {
    const results = res.paginatedResults;
    const updatedMatches = results.data.map((match) => {
        const participantsWithTeam = match.participants.map((participant) => {
            return Object.assign(Object.assign({}, participant), { team: models_1.team.findById(participant.team) });
        });
        return Object.assign(Object.assign({}, match), { participants: participantsWithTeam, tournament: models_1.tournament.findById(match.tournament) });
    });
    setTimeout(() => {
        res.send(Object.assign(Object.assign({}, results), { data: updatedMatches }));
    }, 1000);
};
exports.getMatches = getMatches;
//# sourceMappingURL=match.controller.js.map