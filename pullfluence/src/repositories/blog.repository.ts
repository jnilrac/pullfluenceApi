import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PullfluenceDataSource} from '../datasources';
import {Blog, BlogRelations} from '../models';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype._id,
  BlogRelations
> {
  constructor(
    @inject('datasources.pullfluence') dataSource: PullfluenceDataSource,
  ) {
    super(Blog, dataSource);
  }
}
