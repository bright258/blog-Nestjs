import { IsNotEmpty } from 'class-validator';
export class BlogPostDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  author: string;

  createdAt: Date;
}
