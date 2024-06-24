import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string;
};
