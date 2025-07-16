import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor, type Post } from "@/sanity/client";
import { formatDate, getExcerpt } from "@/lib/utils";
import Image from "next/image";
interface PostCardProps {
  post: Post;
  isWide?: boolean;
}

export function PostCard({ post, isWide = false }: PostCardProps) {
  return isWide ? (
    <Card className="overflow-hidden md:flex h-[550px] ">
      <div className="relative md:h-full w-full h-48">
        {post.image ? (
          <Image
            src={urlFor(post.image).url() || ""}
            alt={post.title}
            fill
            className="object-contain"
          />
        ) : (
          <div className="md:flex h-full w-full md:items-center md:justify-center bg-muted">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <div className="block md:flex md:justify-center flex-col justify w-1/2">
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground">
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
            className="text-sm font-medium text-primary hover:underline"
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
            src={urlFor(post.image).url() || ""}
            alt={post.title}
            fill
            className="object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">
          {formatDate(post.publishedAt)}
        </p>
        {post.body && (
          <p className="text-sm text-gray-500">{getExcerpt(post.body, 550)}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/blog/${post.slug.current}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
