import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Followee" source="followee" />
        <TextInput label="FolloweeUser" source="followeeUser" />
        <TextInput label="Follower" source="follower" />
        <TextInput label="FollowerUser" source="followerUser" />
      </SimpleForm>
    </Create>
  );
};
