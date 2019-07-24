import React from 'react';
import { createFetcher } from './createFetcher.js';
import SuspenseTl from './suspense.js';
const getName = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Suspense');
  }, 2000);
})
const fetcher = createFetcher(getName);
const Greeting = () => {
  return <div>
    Helle {fetcher()}
  </div>
}
const SuspenseDemo = () => {
  return <SuspenseTl fallback={<div>loading...</div>}>
    <Greeting />
  </SuspenseTl>
}
export default SuspenseDemo;