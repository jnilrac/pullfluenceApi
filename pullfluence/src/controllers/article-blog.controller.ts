import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Article,
  Blog,
} from '../models';
import {ArticleRepository} from '../repositories';

export class ArticleBlogController {
  constructor(
    @repository(ArticleRepository)
    public articleRepository: ArticleRepository,
  ) { }

  @get('/articles/{id}/blog', {
    responses: {
      '200': {
        description: 'Blog belonging to Article',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Blog)},
          },
        },
      },
    },
  })
  async getBlog(
    @param.path.string('id') id: typeof Article.prototype._id,
  ): Promise<Blog> {
    return this.articleRepository.blog(id);
  }
}
