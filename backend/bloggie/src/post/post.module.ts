import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './post.entity';
@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
