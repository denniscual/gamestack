import { RequestHandler } from 'express';
import { Model } from '../models';
import { Match } from '../models/types';

export interface PaginatedResults<T = any> {
  hasNext: boolean;
  hasPrev: boolean;
  data: T[];
  page: number;
  limit: number;
  totalCount: number;
}

type GetQueryParams = Partial<{ page: string; limit: string; q: string }>;

export function createPaginateResultsMiddleware(model?: Model) {
  const handler: RequestHandler<any, any, any, GetQueryParams> = (
    req,
    res,
    next,
  ) => {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page ?? '1');
    const pageLimit = parseInt(limit ?? '1000');

    const startIndex = (pageNumber - 1) * pageLimit;
    const endIndex = pageNumber * pageLimit;

    const rows =
      (res as { filteredData?: { id: number }[] }).filteredData ??
      (model as Model).findAll();

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

// A middleware to filter matches.
// Note for filter, we only support filtering by "tournament" for now.
export function createFilterMatchesMiddleware(model: Model<Match>) {
  const handler: RequestHandler<any, any, any, GetQueryParams> = (
    req,
    res,
    next,
  ) => {
    const { q } = req.query;
    let data = model.findAll();
    if (q) {
      const [, tournamentId] = q.split(':');
      data = model
        .findAll()
        .filter((match) => match.tournament === parseInt(tournamentId));
    }
    // @ts-expect-error We added "custom" property.
    res.filteredData = data;
    next();
  };

  return handler;
}
