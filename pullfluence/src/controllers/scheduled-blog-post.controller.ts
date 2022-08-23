import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ScheduledBlogPost} from '../models';
import {ScheduledBlogPostRepository} from '../repositories';

export class ScheduledBlogPostController {
  constructor(
    @repository(ScheduledBlogPostRepository)
    public scheduledBlogPostRepository : ScheduledBlogPostRepository,
  ) {}

  @post('/scheduled-blog-posts')
  @response(200, {
    description: 'ScheduledBlogPost model instance',
    content: {'application/json': {schema: getModelSchemaRef(ScheduledBlogPost)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ScheduledBlogPost, {
            title: 'NewScheduledBlogPost',
            exclude: ['_id'],
          }),
        },
      },
    })
    scheduledBlogPost: Omit<ScheduledBlogPost, '_id'>,
  ): Promise<ScheduledBlogPost> {
    return this.scheduledBlogPostRepository.create(scheduledBlogPost);
  }

  @get('/scheduled-blog-posts/count')
  @response(200, {
    description: 'ScheduledBlogPost model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ScheduledBlogPost) where?: Where<ScheduledBlogPost>,
  ): Promise<Count> {
    return this.scheduledBlogPostRepository.count(where);
  }

  @get('/scheduled-blog-posts')
  @response(200, {
    description: 'Array of ScheduledBlogPost model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ScheduledBlogPost, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ScheduledBlogPost) filter?: Filter<ScheduledBlogPost>,
  ): Promise<ScheduledBlogPost[]> {
    return this.scheduledBlogPostRepository.find(filter);
  }

  @patch('/scheduled-blog-posts')
  @response(200, {
    description: 'ScheduledBlogPost PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ScheduledBlogPost, {partial: true}),
        },
      },
    })
    scheduledBlogPost: ScheduledBlogPost,
    @param.where(ScheduledBlogPost) where?: Where<ScheduledBlogPost>,
  ): Promise<Count> {
    return this.scheduledBlogPostRepository.updateAll(scheduledBlogPost, where);
  }

  @get('/scheduled-blog-posts/{id}')
  @response(200, {
    description: 'ScheduledBlogPost model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ScheduledBlogPost, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ScheduledBlogPost, {exclude: 'where'}) filter?: FilterExcludingWhere<ScheduledBlogPost>
  ): Promise<ScheduledBlogPost> {
    return this.scheduledBlogPostRepository.findById(id, filter);
  }

  @patch('/scheduled-blog-posts/{id}')
  @response(204, {
    description: 'ScheduledBlogPost PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ScheduledBlogPost, {partial: true}),
        },
      },
    })
    scheduledBlogPost: ScheduledBlogPost,
  ): Promise<void> {
    await this.scheduledBlogPostRepository.updateById(id, scheduledBlogPost);
  }

  @put('/scheduled-blog-posts/{id}')
  @response(204, {
    description: 'ScheduledBlogPost PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() scheduledBlogPost: ScheduledBlogPost,
  ): Promise<void> {
    await this.scheduledBlogPostRepository.replaceById(id, scheduledBlogPost);
  }

  @del('/scheduled-blog-posts/{id}')
  @response(204, {
    description: 'ScheduledBlogPost DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.scheduledBlogPostRepository.deleteById(id);
  }
}
