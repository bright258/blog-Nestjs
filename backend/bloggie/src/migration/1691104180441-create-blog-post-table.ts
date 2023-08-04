import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBlogPostTable1691103876152 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        create table BlogPost (
            id bigserial primary key,
            name text,
            author text,
            
            
            

        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table BlogPost;`);
  }
}
