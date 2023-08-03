import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { BlogPostDto } from './postDto';
import { BlogPost } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async createBlogPost(@Body() blogPostData: BlogPostDto): Promise<BlogPost> {
    return this.postService.createBlogPost(blogPostData);
  }

  @Get()
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.postService.getAllBlogPosts();
  }

  @Get(':id')
  async getOneBlogPost(@Param('id') id: string): Promise<BlogPost> {
    return await this.postService.getBlogPost(id);
  }
}
