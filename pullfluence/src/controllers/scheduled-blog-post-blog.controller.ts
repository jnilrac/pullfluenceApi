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
  Blog,
} from '../models';
import {ScheduledBlogPostRepository} from '../repositories';

export class ScheduledBlogPostBlogController {
  constructor(
    @repository(ScheduledBlogPostRepository)
    public scheduledBlogPostRepository: ScheduledBlogPostRepository,
  ) { }

  @get('/scheduled-blog-posts/{id}/blog', {
    responses: {
      '200': {
        description: 'Blog belonging to ScheduledBlogPost',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Blog)},
          },
        },
      },
    },
  })
  async getBlog(
    @param.path.string('id') id: typeof ScheduledBlogPost.prototype._id,
  ): Promise<Blog> {
    return this.scheduledBlogPostRepository.blog(id);
  }
}
