"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.team = exports.tournament = exports.match = exports.Model = void 0;
const Model_1 = __importDefault(require("./Model"));
exports.Model = Model_1.default;
const match = new Model_1.default('matches');
exports.match = match;
const tournament = new Model_1.default('tournaments');
exports.tournament = tournament;
const team = new Model_1.default('teams');
exports.team = team;
//# sourceMappingURL=index.js.map