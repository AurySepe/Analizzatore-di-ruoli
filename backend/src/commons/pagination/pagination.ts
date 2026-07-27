import { QueryPaginationDto } from './query-pagination.dto';
import { PaginatedDto } from './paginated.dto';

export function paginate(query: QueryPaginationDto) {
  const page = Math.max(1, query.page || 1);
  const limit = Math.max(1, Math.min(100, query.limit || 10));
  const skip = (page - 1) * limit;

  return { skip, take: limit, page, limit };
}

export function PaginationOption<T>(
  items: T[],
  total: number,
  query: QueryPaginationDto,
): PaginatedDto<T> {
  const { page, limit } = paginate(query);
  const totalPages = Math.ceil(total / limit);

  return {
    data: items,
    meta: {
      total,
      page,
      limit,
      totalPages,
    },
  };
}
