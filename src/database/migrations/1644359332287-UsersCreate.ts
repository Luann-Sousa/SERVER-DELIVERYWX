import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersCreate1644359332287 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true, // chave primaria
            isGenerated: true, //gerar automaticamente
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'username',
            type: 'string',
          },

          {
            name: 'email',
            type: 'varchar',
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
            type: 'numeric',
          },
          {
            name: 'file',
            type: 'varchar',
          },
          {
            name: 'nivel_user',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_nivel_user',
            columnNames: ['nivel_user'],
            referencedTableName: 'nivel_user',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('users');
  }
}
