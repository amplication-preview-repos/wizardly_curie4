import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followee?: StringNullableFilter;
  followeeUser?: StringNullableFilter;
  follower?: StringNullableFilter;
  followerUser?: StringNullableFilter;
  id?: StringFilter;
};
