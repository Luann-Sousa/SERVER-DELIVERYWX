import { EntityRepository, Repository } from 'typeorm';
import { Products } from '../../entities/Products';

@EntityRepository(Products)
class RepositoriesProduct extends Repository<Products> {}

export { RepositoriesProduct };
