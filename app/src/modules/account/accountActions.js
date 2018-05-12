// import { createAccount } from './accountClient';

export const ACCOUNT = {
  CREATE: 'CREATE_ACCOUNT',
  CREATE_SUCCES_: 'CREATE_ACCOUNT_SUCCESS',
  CREATE_ERROR: 'CREATE_ACCOUNT_ERROR',
};

export function createUserAccount() {
  return { type: ACCOUNT.CREATE };
}
