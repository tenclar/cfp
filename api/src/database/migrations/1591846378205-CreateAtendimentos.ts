import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateAtendimento1591846378205
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'atendimentos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'decreto_id',
            type: 'uuid',
          },

          {
            name: 'valor',
            type: 'int',
          },
          {
            name: 'tipo',
            type: 'varchar',
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
      }),
    );

    await queryRunner.createForeignKey(
      'atendimentos',
      new TableForeignKey({
        name: 'AtendimentoDecreto',
        columnNames: ['decreto_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'decretos',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('atendimentos', 'AtendimentoDecreto');
    await queryRunner.dropTable('atendimentos');
  }
}
