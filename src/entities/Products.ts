import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from './User';

@Entity('products')
class Products {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  categories: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  delivery_fee: number;

  @Column()
  delivery_time: string;

  @Column()
  assessment: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' }) ///qual coluna dentro da minha tabela de videos que tou referenciando
  user: User;

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

export { Products };
