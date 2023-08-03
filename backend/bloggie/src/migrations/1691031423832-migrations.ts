import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserData1629150144285 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      "INSERT INTO BlogPost (id, content, author, createdAt) VALUES (1, 'John', 'Doe');",
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE FROM BlogPost;');
  }
}
