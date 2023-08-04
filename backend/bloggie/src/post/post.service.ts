import { Injectable, NotFoundException } from '@nestjs/common';
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
    const post = await this.postRepository.create(blogPostData);
    return await this.postRepository.save(post);
  }

  async getBlogPost(blogPostId: string): Promise<BlogPost> {
    const post = await this.postRepository.findOneBy({ id: blogPostId });
    if (!post) throw new NotFoundException();
    return post;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.postRepository.find();
  }
}
