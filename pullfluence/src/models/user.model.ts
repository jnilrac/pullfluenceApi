import {Entity, model, property} from '@loopback/repository';

@model({settings: {
  strictObjectIDCoercion: true
}})
export class User extends Entity {
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
  auth_info: object;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
