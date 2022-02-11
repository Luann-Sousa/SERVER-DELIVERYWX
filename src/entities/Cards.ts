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

@Entity('cards')
class Cards {
  @PrimaryColumn()
  id: string;

  @Column()
  name_card: string;

  @Column()
  number_card: number;

  @Column()
  cpf_card: string;

  @Column()
  date_card: Date;

  @Column()
  cvv_card: number;

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
export { Cards };
