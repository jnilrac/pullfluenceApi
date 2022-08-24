import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbdatasourceDataSource} from '../datasources';
import {Account, AccountRelations} from '../models';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype._id,
  AccountRelations
> {
  constructor(
    @inject('datasources.dbdatasource') dataSource: DbdatasourceDataSource,
  ) {
    super(Account, dataSource);
  }
}
