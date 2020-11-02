import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { NumberForm } from './NumberForm';
import { store } from './store/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <NumberForm />
    </Provider>
  );
};

export default App;
