import { counterState } from './counter';
import { userState } from './user';

type storeTypes = typeof counterState & typeof userState;

export default storeTypes;
