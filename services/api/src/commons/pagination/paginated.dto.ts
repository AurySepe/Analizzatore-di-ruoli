import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class PaginatedMetaDto {
  @ApiProperty({ type: 'integer' })
  total: number;

  @ApiProperty({ type: 'integer' })
  page: number;

  @ApiProperty({ type: 'integer' })
  limit: number;

  @ApiProperty({ type: 'integer' })
  totalPages: number;
}

export class PaginatedDto<T> {
  data: T[];

  @ApiProperty({ type: () => PaginatedMetaDto })
  meta: PaginatedMetaDto;
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiExtraModels(PaginatedMetaDto, model),
    ApiOkResponse({
      schema: {
        allOf: [
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
              meta: {
                $ref: getSchemaPath(PaginatedMetaDto),
              },
            },
          },
        ],
      },
    }),
  );
};
