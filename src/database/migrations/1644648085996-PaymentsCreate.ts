import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class PaymentsCreate1644648085996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'payments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'obeservation',
            type: 'varchar',
          },
          {
            name: 'type_payment',
            type: 'varchar',
          },
          {
            name: 'name_expresso_card',
            type: 'varchar',
          },
          {
            name: 'number_card',
            type: 'numeric',
          },

          {
            name: 'date_card',
            type: 'timestap',
            default: 'now()',
          },
          {
            name: 'cvv_card',
            type: 'numeric',
          },
          {
            name: 'quantity',
            type: 'numeric',
          },
          {
            name: 'resumo',
            type: 'numeric',
          },
          {
            name: 'toti',
            type: 'numeric',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'card_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestap',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestap',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'fk_payments_users',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_payments_cards',
            columnNames: ['card_id'],
            referencedTableName: 'cards',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('payments');
  }
}
