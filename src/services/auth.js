import React from 'react';
import api from './api';
import { Redirect } from 'react-router-dom';

export const TOKEN_KEY = "@apostila-digital-token";
export const USER_KIND = "@user-kind";
export const USER_DATA = "@user-data";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = response => {
  localStorage.setItem(TOKEN_KEY, response.headers["access-token"]);
  localStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
  localStorage.setItem(USER_KIND, response.data.data.kind);
};

export const SignOut = () => {
  try {
    let response = api.delete('/auth/sign_out')
    console.log(response);
    localStorage.removeItem(TOKEN_KEY);
    return <Redirect to='/' />;
  } catch (err) {
    console.log(err);
  }
}