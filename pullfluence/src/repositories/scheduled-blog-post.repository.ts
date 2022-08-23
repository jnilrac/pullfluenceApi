import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PullfluenceDataSource} from '../datasources';
import {ScheduledBlogPost, ScheduledBlogPostRelations, Article, Blog, User} from '../models';
import {ArticleRepository} from './article.repository';
import {BlogRepository} from './blog.repository';
import {UserRepository} from './user.repository';

export class ScheduledBlogPostRepository extends DefaultCrudRepository<
  ScheduledBlogPost,
  typeof ScheduledBlogPost.prototype._id,
  ScheduledBlogPostRelations
> {

  public readonly article: BelongsToAccessor<Article, typeof ScheduledBlogPost.prototype._id>;

  public readonly blog: BelongsToAccessor<Blog, typeof ScheduledBlogPost.prototype._id>;

  public readonly user: BelongsToAccessor<User, typeof ScheduledBlogPost.prototype._id>;

  constructor(
    @inject('datasources.pullfluence') dataSource: PullfluenceDataSource, @repository.getter('ArticleRepository') protected articleRepositoryGetter: Getter<ArticleRepository>, @repository.getter('BlogRepository') protected blogRepositoryGetter: Getter<BlogRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(ScheduledBlogPost, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.blog = this.createBelongsToAccessorFor('blog', blogRepositoryGetter,);
    this.article = this.createBelongsToAccessorFor('article', articleRepositoryGetter,);
  }
}
