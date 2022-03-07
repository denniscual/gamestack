"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilterMatchesMiddleware = exports.createPaginateResultsMiddleware = void 0;
function createPaginateResultsMiddleware(model) {
    const handler = (req, res, next) => {
        var _a;
        const { page, limit } = req.query;
        const pageNumber = parseInt(page !== null && page !== void 0 ? page : '1');
        const pageLimit = parseInt(limit !== null && limit !== void 0 ? limit : '1000');
        const startIndex = (pageNumber - 1) * pageLimit;
        const endIndex = pageNumber * pageLimit;
        const rows = (_a = res.filteredData) !== null && _a !== void 0 ? _a : model.findAll();
        const results = {
            hasNext: false,
            hasPrev: false,
            data: [],
            page: pageNumber,
            limit: pageLimit,
            totalCount: rows.length,
        };
        if (endIndex < rows.length) {
            results.hasNext = true;
        }
        if (startIndex > 0) {
            results.hasPrev = true;
        }
        results.data = rows.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
    return handler;
}
exports.createPaginateResultsMiddleware = createPaginateResultsMiddleware;
function createFilterMatchesMiddleware(model) {
    const handler = (req, res, next) => {
        const { q } = req.query;
        let data = model.findAll();
        if (q) {
            const [, tournamentId] = q.split(':');
            data = model
                .findAll()
                .filter((match) => match.tournament === parseInt(tournamentId));
        }
        res.filteredData = data;
        next();
    };
    return handler;
}
exports.createFilterMatchesMiddleware = createFilterMatchesMiddleware;
//# sourceMappingURL=index.js.map