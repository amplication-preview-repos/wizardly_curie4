export type Follow = {
  createdAt: Date;
  followee: string | null;
  followeeUser: string | null;
  follower: string | null;
  followerUser: string | null;
  id: string;
  updatedAt: Date;
};
