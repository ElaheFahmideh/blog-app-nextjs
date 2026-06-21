interface IPost {
  _id: NumberString;
  title: string;
  slug: string;
  category: ICategory;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: string[];
  author: IAuthor;
  related: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  coverImageUrl: string;
  id: NumberString;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: any[];
  commentsCount: number;
}

interface ICategory extends Pick<IPost, '_id' | 'title' | 'slug'> {}

interface IAuthor {
  _id: NumberString;
  name: string;
  avatar: string;
  avatarUrl: string;
}

export default IPost;
