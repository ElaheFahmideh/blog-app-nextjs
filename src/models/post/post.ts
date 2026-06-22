interface IComment {
  _id: NumberString;
  user: IUser;
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: TAnswers[];
}

export default interface IPost {
  _id: NumberString;
  title: string;
  slug: string;
  category: TCategory;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: string[];
  author: IUser;
  related: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  coverImageUrl: string;
  id: NumberString;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: IComment[];
  commentsCount: number;
}

export interface IUser {
  _id: NumberString;
  avatar: string;
  avatarUrl: string;
  name: string;
}

type TAnswers = Omit<IComment, 'answers'>;
export type TCategory = Pick<IPost, '_id' | 'title' | 'slug'>;
