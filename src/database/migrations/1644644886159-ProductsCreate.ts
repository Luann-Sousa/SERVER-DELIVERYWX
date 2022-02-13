import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ProductsCreate1644644886159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'products',
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
            name: 'categories',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'numeric',
          },
          {
            name: 'stock',
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
            name: 'assessment',
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
            name: 'fk_products_users',
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
    return queryRunner.dropTable('products');
  }
}
