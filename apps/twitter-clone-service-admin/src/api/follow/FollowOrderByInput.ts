import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followee?: SortOrder;
  followeeUser?: SortOrder;
  follower?: SortOrder;
  followerUser?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
