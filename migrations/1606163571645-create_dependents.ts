import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createdependents1606163571645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'Dependents',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
              },
              {
                name: 'name',
                type: 'varchar'
              },
              {
                name: 'birthdate',
                type: 'integer',
                unsigned: true
              },
              {
                name: 'kinship_degree',
                type: 'varchar',
              },
              {
                name: 'id_functionary',
                type: 'integer',
                unsigned: true
              },
            ]
          }))
      
        }
      
        
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dependents');
    }

}
