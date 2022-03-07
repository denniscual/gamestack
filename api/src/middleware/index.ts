import { RequestHandler } from 'express';
import { Model } from '../models';

export interface PaginatedResults<T = any> {
  hasNext: boolean;
  hasPrev: boolean;
  data: T[];
  page: number;
  limit: number;
  totalCount: number;
}

export function createPaginateResultsMiddleware(model: Model) {
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

    const rows = model.findAll();

    const results: PaginatedResults = {
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
    // @ts-expect-error We added "custom" property.
    res.paginatedResults = results;
    next();
  };

  return handler;
}
