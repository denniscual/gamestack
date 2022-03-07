"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaginatedResultsMiddleware = void 0;
function createPaginatedResultsMiddleware(model) {
    const handler = (req, res, next) => {
        const { page, limit } = req.query;
        const pageNumber = parseInt(page !== null && page !== void 0 ? page : '1');
        const pageLimit = parseInt(limit !== null && limit !== void 0 ? limit : '10');
        const startIndex = (pageNumber - 1) * pageLimit;
        const endIndex = pageNumber * pageLimit;
        const results = {
            hasNext: false,
            hasPrev: false,
            data: [],
            page: pageNumber,
            limit: pageLimit,
        };
        const rows = model.findAll();
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
exports.createPaginatedResultsMiddleware = createPaginatedResultsMiddleware;
//# sourceMappingURL=index.js.map