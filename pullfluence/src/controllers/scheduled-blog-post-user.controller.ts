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
  User,
} from '../models';
import {ScheduledBlogPostRepository} from '../repositories';

export class ScheduledBlogPostUserController {
  constructor(
    @repository(ScheduledBlogPostRepository)
    public scheduledBlogPostRepository: ScheduledBlogPostRepository,
  ) { }

  @get('/scheduled-blog-posts/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to ScheduledBlogPost',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof ScheduledBlogPost.prototype._id,
  ): Promise<User> {
    return this.scheduledBlogPostRepository.user(id);
  }
}
