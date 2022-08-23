import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ScheduledBlogPost,
  Article,
} from '../models';
import {ScheduledBlogPostRepository} from '../repositories';

export class ScheduledBlogPostArticleController {
  constructor(
    @repository(ScheduledBlogPostRepository)
    public scheduledBlogPostRepository: ScheduledBlogPostRepository,
  ) { }

  @get('/scheduled-blog-posts/{id}/article', {
    responses: {
      '200': {
        description: 'Article belonging to ScheduledBlogPost',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Article)},
          },
        },
      },
    },
  })
  async getArticle(
    @param.path.string('id') id: typeof ScheduledBlogPost.prototype._id,
  ): Promise<Article> {
    return this.scheduledBlogPostRepository.article(id);
  }
}
