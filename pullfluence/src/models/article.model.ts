import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';
import {Blog} from './blog.model';

@model({settings: {
  strictObjectIDCoercion: true
}})
export class Article extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'object',
    required: true,
  })
  content: object;

  @property({
    type: 'date',
    required: true,
  })
  date_posted: string;

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => Blog)
  blogId: string;

  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
