import { useState } from 'react';
import operations from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { RegFormStyles } from 'components/RegForm/RegFormStyles.styled';

const LogForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      operations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <>
      <h2>Login page</h2>
      <RegFormStyles autoComplete="off" onSubmit={handleSubmit}>
        <div className="label-container">
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            // onChange={handleChange}
            // value={email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="label-container">
          <input
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            // onChange={handleChange}
            // value={password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Log In</button>
      </RegFormStyles>
    </>
  );
};
export default LogForm;
