import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from './User';
import { Products } from './Products';

@Entity('carrs')
class Carr {
  @PrimaryColumn()
  id: string;

  @Column()
  quantity: number;

  @Column()
  resumo: number;

  @Column()
  toti: number;

  @Column()
  user_id: string;
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  product_id: string;
  @ManyToOne(() => Products, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' }) ///qual coluna dentro da minha tabela de videos que tou referenciando
  product: Products;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Carr };
