import React from 'react';
import { GetUserComponent } from '../../../__generated__/graphql';

interface Props {
  id?: string;
}

const User = ({ id }: Required<Props>) => (
  <GetUserComponent variables={{ id }}>
    {({ data, loading }) => {
      if (loading) return 'loading...';

      return (
        data && (
          <ul>
            <li>{data.user.id}</li>
            <li>{data.user.name}</li>
            <li>{data.user.username}</li>
          </ul>
        )
      );
    }}
  </GetUserComponent>
);

User.defaultProps = {
  id: '1',
};

export default User;
