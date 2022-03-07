"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaginateResultsMiddleware = void 0;
function createPaginateResultsMiddleware(model) {
    const handler = (req, res, next) => {
        const { page, limit } = req.query;
        const pageNumber = parseInt(page !== null && page !== void 0 ? page : '1');
        const pageLimit = parseInt(limit !== null && limit !== void 0 ? limit : '10');
        const startIndex = (pageNumber - 1) * pageLimit;
        const endIndex = pageNumber * pageLimit;
        const rows = model.findAll();
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
//# sourceMappingURL=index.js.map