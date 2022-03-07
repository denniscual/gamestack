import { RequestHandler } from 'express';
import { Model } from '../models';

export interface PaginatedResults {
  hasNext: boolean;
  hasPrev: boolean;
  data: any[];
  page: number;
  limit: number;
}

export function createPaginatedResultsMiddleware(model: Model) {
  const handler: RequestHandler<
    any,
    any,
    any,
    Partial<{ page: string; limit: string }>
  > = (req, res, next) => {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page ?? '1');
    const pageLimit = parseInt(limit ?? '10');

    const startIndex = (pageNumber - 1) * pageLimit;
    const endIndex = pageNumber * pageLimit;

    const results: PaginatedResults = {
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
    // @ts-expect-error We added "custom" property.
    res.paginatedResults = results;
    next();
  };

  return handler;
}
