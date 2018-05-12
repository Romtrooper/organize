import { ACCOUNT } from './accountActions';
import { createAccount } from './accountClient';

const AccountMiddleware = store => next => (action) => {
  switch (action.type) {
    case ACCOUNT.CREATE: {
      createAccount();
      break;
    }
    default:
      console.log('action');
  }

  // Go to the next
  next(action);
};

export default AccountMiddleware;

// store.dispatch(saveDataFromApi(data));
