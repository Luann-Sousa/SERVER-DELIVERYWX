import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from './User';
import { Address } from './Address';

@Entity('company')
class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  file: string;

  @Column()
  description: string;

  @Column()
  cnpj: string;

  @Column()
  assessment: number;

  @Column()
  delivery_feed: number;

  @Column()
  delivery_time: string;

  @Column()
  user_id: string;

  @Column()
  address_id: string;

  @ManyToMany(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({ name: 'user_id' }) ///qual coluna dentro da minha tabela de videos que tou referenciando
  user: User;

  @ManyToMany(() => Address, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({ name: 'address_id' }) ///qual coluna dentro da minha tabela de videos que tou referenciando
  address: Address[];

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
export { Company };
