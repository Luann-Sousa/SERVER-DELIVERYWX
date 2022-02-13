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
import { Cards } from './Cards';
import { User } from './User';
import { Products } from './Products';

@Entity('payments')
class Payments {
  @PrimaryColumn()
  id: string;

  @Column()
  obeservation?: string;

  @Column()
  type_payment: string;

  @Column()
  name_expresso_card?: string;

  @Column()
  number_card?: number;

  @Column()
  date_card?: Date;

  @Column()
  cvv_card?: number;

  @Column()
  quantity: number;

  @Column()
  resumo: string;

  @Column()
  toti: string;

  @Column()
  card_id?: string;

  @Column()
  user_id: string;

  @Column()
  product_id?: string;

  @ManyToOne(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' }) ///qual coluna dentro da minha tabela de videos que tou referenciando
  user: User;

  @ManyToOne(() => Cards, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'card_id' }) ///qual coluna dentro da minha tabela de videos que tou referenciando
  card: Cards;

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
export { Payments };
