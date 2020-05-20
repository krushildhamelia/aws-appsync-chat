// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { getApolloContext } from 'react-apollo';
import AWSAppSyncClient from 'aws-appsync';
import Loading from './components/Loading'

const Rehydrated = ({ children }) => {
  const { client } = useContext(getApolloContext());
  const [rehydrated, setState] = useState(false);

  useEffect(() => {
    if (client instanceof AWSAppSyncClient) {
      (async () => {
        await client.hydrated();
        setState(true);
      })();
    }
  }, [client]);
  return rehydrated ? <>{children}</> : <Loading/>;
};

export default Rehydrated;
