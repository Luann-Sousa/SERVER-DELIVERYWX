import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersCreate1644379408372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
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
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'file',
            type: 'varchar',
          },
          {
            name: 'nivel_user',
            type: 'numeric',
          },
          {
            name: 'date_nasc',
            type: 'timestap',
            default: 'now()',
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
            name: 'fk_nivel_user',
            columnNames: ['nivel_user'],
            referencedTableName: 'nivel_user',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('users');
  }
}
