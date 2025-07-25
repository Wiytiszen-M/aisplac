import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { urlFor, type Post } from '@/sanity/client';
import { formatDate, getExcerpt } from '@/lib/utils';
import Image from 'next/image';
interface PostCardProps {
  post: Post;
  isWide?: boolean;
}

export function PostCard({ post, isWide = false }: PostCardProps) {
  return isWide ? (
    <Card className="h-[550px] overflow-hidden md:flex">
      <div className="relative h-48 w-full md:h-full">
        {post.image ? (
          <Image
            src={urlFor(post.image).url() || ''}
            alt={post.title}
            fill
            className="object-contain"
          />
        ) : (
          <div className="bg-muted h-full w-full md:flex md:items-center md:justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <div className="justify block w-1/2 flex-col md:flex md:justify-center">
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground text-sm">
            {formatDate(post.publishedAt)}
          </p>
          {post.body && (
            <p className="text-sm text-gray-500">
              {getExcerpt(post.body, 550)}
            </p>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link
            href={`/blog/${post.slug.current}`}
            className="text-primary text-sm font-medium hover:underline"
          >
            Read more
          </Link>
        </CardFooter>
      </div>
    </Card>
  ) : (
    <Card className="overflow-hidden">
      {/* Reemplazar la sección de imagen con el nuevo componente */}
      <div className="relative h-48 w-full">
        {post.image ? (
          <Image
            src={urlFor(post.image).url() || ''}
            alt={post.title}
            fill
            className="object-contain"
          />
        ) : (
          <div className="bg-muted flex h-full w-full items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm">
          {formatDate(post.publishedAt)}
        </p>
        {post.body && (
          <p className="text-sm text-gray-500">{getExcerpt(post.body, 550)}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/blog/${post.slug.current}`}
          className="text-primary text-sm font-medium hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
