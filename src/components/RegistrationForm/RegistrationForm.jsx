import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { authReducer } from '../../redux/auth/slice';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import logoMoneyGuard from '../../images/logo_money_guard.svg';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';
import {
  StyledForm,
  StyledLink,
  LogoBox,
  LogoImg,
  LogoName,
} from '../LoginForm/LoginForm.styled';
import { StyledSection } from './RegistrationForm.styled';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be at least 6 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async values => {
    try {
      const response = await dispatch(registerThunk(values));

      if (response.status === 201) {
        dispatch(authReducer.actions.login(response.data));
        return <Navigate to="/" />;
      } else if (response.status === 400) {
        toast.error(`Validation error: ${response.data}`);
      } else if (response.status === 409) {
        toast.error(
          `Error: User with such email already exists:${response.data}`
        );
      } else {
        toast.error(
          `Unknown error during registration. Status: ${response.status}`
        );
      }
    } catch (error) {
      toast.error(`Registration was unsuccessful: ${error}`);
    }
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={formik.handleSubmit}>
        <LogoBox>
          <LogoImg
            src={logoMoneyGuard}
            alt="logo"
            style={{ marginTop: '30px' }}
          />
          <LogoName>Money Guard</LogoName>
        </LogoBox>
        <TextField
          fullWidth
          id="name"
          name="name"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <PersonIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Name
            </span>
          }
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          style={{
            width: '409px',
            marginTop: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <EmailOutlinedIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Email
            </span>
          }
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{
            width: '409px',
            marginTop: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <LockIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Password
            </span>
          }
          type="password"
          value={formik.values.password}
          onChange={e => {
            formik.handleChange(e);
            setPassword(e.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{
            width: '409px',
            marginTop: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <LockIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Confirm password
            </span>
          }
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          style={{
            width: '409px',
            marginTop: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        />
        <PasswordStrengthBar password={password} />
        <Button
          type="submit"
          style={{
            width: '300px',
            height: '50px',
            background:
              'linear-gradient(97deg, #FFC727 0%, #9E40BA 61%, #7000FF 91%)',
            boxShadow: '1px 9px 15px rgba(0, 0, 0, 0.20)',
            borderRadius: '20px',
            color: '#ffffff',
            fontWeight: 400,
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '1.80',
            textAlign: 'center',
            cursor: 'pointer',
            marginTop: '40px',
            transition: 'background 0.3s, font-weight 0.3s',
          }}
        >
          Register
        </Button>
        <StyledLink to="/login">Log in</StyledLink>
      </StyledForm>
    </StyledSection>
  );
};

export default RegistrationForm;
