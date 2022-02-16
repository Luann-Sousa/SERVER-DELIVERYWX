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
  user_id: string;

  @Column()
  product_id: string;

  @ManyToMany(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable()
  user: User[];

  @ManyToMany(() => Products, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable()
  product: Products[];

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
