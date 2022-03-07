"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.team = exports.tournament = exports.match = void 0;
const Model_1 = __importDefault(require("./Model"));
exports.match = new Model_1.default('matches');
exports.tournament = new Model_1.default('tournaments');
exports.team = new Model_1.default('teams');
//# sourceMappingURL=index.js.map