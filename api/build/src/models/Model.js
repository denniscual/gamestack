"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class Model {
    constructor(collectionName) {
        this.rows = [];
        this.rows = db_1.default[collectionName];
    }
    findById(id) {
        const foundRow = this.rows.find((row) => row.id === id);
        return foundRow ? foundRow : null;
    }
    findAll() {
        return this.rows;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map