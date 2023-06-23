import { Lens } from './Lens';

export interface LensRepository {
  save(lens: Lens): void;
  findAll(): Lens[];
}
