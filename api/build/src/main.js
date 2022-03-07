"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./db");
const tournament_routes_1 = __importDefault(require("./routes/tournament.routes"));
const match_routes_1 = __importDefault(require("./routes/match.routes"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
(0, tournament_routes_1.default)(app);
(0, match_routes_1.default)(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//# sourceMappingURL=main.js.map