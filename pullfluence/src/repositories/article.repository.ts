import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PullfluenceDataSource} from '../datasources';
import {Article, ArticleRelations, User, Blog} from '../models';
import {UserRepository} from './user.repository';
import {BlogRepository} from './blog.repository';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype._id,
  ArticleRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Article.prototype._id>;

  public readonly blog: BelongsToAccessor<Blog, typeof Article.prototype._id>;

  constructor(
    @inject('datasources.pullfluence') dataSource: PullfluenceDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('BlogRepository') protected blogRepositoryGetter: Getter<BlogRepository>,
  ) {
    super(Article, dataSource);
    this.blog = this.createBelongsToAccessorFor('blog', blogRepositoryGetter,);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
  }
}
