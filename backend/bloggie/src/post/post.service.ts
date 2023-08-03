import { Injectable, Body, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from '../post/post.entity';
import { Repository } from 'typeorm';
import { BlogPostDto } from './postDto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(BlogPost)
    private postRepository: Repository<BlogPost>,
  ) {}

  async createBlogPost(blogPostData: BlogPostDto): Promise<BlogPost> {
    const post = this.postRepository.create(blogPostData);
    post.createdAt = new Date();
    return await this.postRepository.save(post);
  }

  async getBlogPost(blogPostId: string): Promise<BlogPost> {
    return this.postRepository.findOneBy({ id: blogPostId });
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return this.postRepository.find();
  }
}
