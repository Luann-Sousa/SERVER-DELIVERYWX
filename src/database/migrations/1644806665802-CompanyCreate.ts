import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CompanyCreate1644806665802 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'file',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar',
          },
          {
            name: 'assessment',
            type: 'numeric',
          },
          {
            name: 'delivery_fee',
            type: 'numeric',
          },
          {
            name: 'delivery_time',
            type: 'varhcar',
          },
          {
            name: 'user_id',
            type: 'uudi',
          },
          {
            name: 'address_id',
            type: 'uudi',
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
            name: 'fk_company_users',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_company_address',
            columnNames: ['address_id'],
            referencedTableName: 'address',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('company');
  }
}
