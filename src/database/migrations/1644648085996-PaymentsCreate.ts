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
            isNullable: false,
          },
          {
            name: 'type_payment',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'name_expresso_card',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'number_card',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'date_card',
            type: 'timestap',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'cvv_card',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'resumo',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'toti',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'card_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'product_id',
            type: 'uuid',
            isNullable: false,
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
          {
            name: 'fk_payments_products',
            columnNames: ['product_id'],
            referencedTableName: 'products',
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
