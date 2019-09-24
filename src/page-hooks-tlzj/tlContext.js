import { createContext } from 'react';
const tlContext = createContext(null);
export const TlProvider = tlContext.Provider;
export const TlConsumer = tlContext.Consumer;
export default tlContext;