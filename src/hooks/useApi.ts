import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

const useAPI = (url: string, config = {}) => {
  const [state, setState] = useState({
    response: undefined,
    error: undefined,
    isLoading: true,
  });

  const fetch = () => {
    axios(url, config)
      .then(response => {
        setState({error: undefined, response, isLoading: false});
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled by cleanup: ', error.message);
        } else {
          setState({error, response: undefined, isLoading: false});
        }
      });
  };

  useEffect(() => {
    setState({...state, isLoading: true});
    fetch();
  }, [url, config?.params?.base]);

  const {response, error, isLoading} = state;

  const setData = newData => {
    // Used to update state from component
    const newResponse = {...response, data: newData};
    setState({...state, response: newResponse});
  };

  const data = response ? response.data : undefined;
  return {data, response, error, isLoading, setData, fetch};
};

export {useAPI};
