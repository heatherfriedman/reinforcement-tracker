import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { useDispatch, Provider } from 'react-redux';
import styled from 'styled-components';
import { actions } from './slice';
import { Stars } from './Stars';
import { store } from './store/store';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NumberForm: FC = () => {
  const dispatch = useDispatch();
  const [numberInput, setNumberInput] = useState(0);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    setNumberInput(num);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(actions.setNumber({ number: numberInput }));
    },
    [dispatch, numberInput],
  );

  return (
    <Provider store={store}>
      <Container onSubmit={onSubmit}>
        <div>Reinfrocement Tracker</div>
        <div>How many stars?</div>
        <input onChange={onChange}></input>
        <input type='submit'></input>
        <Stars />
      </Container>
    </Provider>
  );
};
