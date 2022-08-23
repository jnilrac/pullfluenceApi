import {Entity, model, property} from '@loopback/repository';

@model({settings: {
  strictObjectIDCoercion: true
}})
export class Blog extends Entity {
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


  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  // describe navigational properties here
}

export type BlogWithRelations = Blog & BlogRelations;
