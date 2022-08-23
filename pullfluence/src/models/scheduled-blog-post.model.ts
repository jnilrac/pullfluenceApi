import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Article} from './article.model';
import {Blog} from './blog.model';
import {User} from './user.model';

@model({settings: {
  strictObjectIDCoercion: true
}})
export class ScheduledBlogPost extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  time: string;

  @belongsTo(() => Article)
  articleId: string;

  @belongsTo(() => Blog)
  blogId: string;

  @belongsTo(() => User)
  userId: string;

  constructor(data?: Partial<ScheduledBlogPost>) {
    super(data);
  }
}

export interface ScheduledBlogPostRelations {
  // describe navigational properties here
}

export type ScheduledBlogPostWithRelations = ScheduledBlogPost & ScheduledBlogPostRelations;
