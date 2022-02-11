import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CardsCreate1644547448240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'cards',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name_card',
            type: 'varchar',
          },
          {
            name: 'number_card',
            type: 'numeric',
          },
          {
            name: 'cpf_card',
            type: 'varchar',
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
            name: 'user_id',
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
            name: 'fk_cards_users',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('cards');
  }
}
