"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor(rows) {
        this.rows = [];
        this.rows = rows;
    }
    findById(id) {
        const foundRow = this.rows.find((row) => row.id === id);
        return foundRow ? foundRow : null;
    }
    findByAll() {
        return this.rows;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map