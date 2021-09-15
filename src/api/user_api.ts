import config from '../config.json';
import { AppDispatch } from '../context';
import { setUserInfo } from '../context/userInfoReducer';
import {
  SignupCredentials,
  UserCredentials,
  UserCredentialsPasswordChange,
} from '../types';
import { mapError, handleException } from './index';

const USER_URL = `${config.api_url}/user`;
const SESSION_URL = `${config.api_url}/session`;

export const user_login = (
  credentials: UserCredentials,
  onSuccess: (res: Response) => void = () => {},
  onFailure: any = handleException
): void => {
  fetch(SESSION_URL, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(mapError)
    .then(onSuccess)
    .catch(onFailure);
};

export const user_logout = (
  onSuccess: (res: Response) => void = () => {},
  onFailure: any = handleException
): void => {
  fetch(SESSION_URL, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(mapError)
    .then(onSuccess)
    .catch(onFailure);
};

export const user_signup = (
  credentials: SignupCredentials,
  onSuccess: (res: Response) => void = () => {},
  onFailure: any = handleException
): void => {
  fetch(USER_URL, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(mapError)
    .then(onSuccess)
    .catch(onFailure);
};

export const user_delete = (credentials: UserCredentials): void => {
  fetch(USER_URL, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(mapError)
    .catch(handleException);
};

export const user_password_change = (
  credentials: UserCredentialsPasswordChange
): void => {
  fetch(USER_URL, {
    credentials: 'include',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(mapError)
    .catch(handleException);
};

export const user_info = (dispatch: AppDispatch, silent = false): void => {
  fetch(`${USER_URL}/info`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(mapError)
    .then((response) => response.json())
    .then((data) => {
      setUserInfo(data, dispatch);
    })
    .catch((error) => handleException(error, silent));
};

export const user_salt = (
  salt: string,
  onSuccess: (res: Response) => void = () => {},
  onFailure: any = handleException
): void => {
  fetch(`${USER_URL}/salt`, {
    credentials: 'include',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ salt }),
  })
    .then(mapError)
    .then(onSuccess)
    .catch(onFailure);
};