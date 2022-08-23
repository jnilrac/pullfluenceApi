import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PullfluenceDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {
  constructor(
    @inject('datasources.pullfluence') dataSource: PullfluenceDataSource,
  ) {
    super(User, dataSource);
  }
}
