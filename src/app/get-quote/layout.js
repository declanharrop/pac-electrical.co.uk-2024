import React from 'react';
import { UserDetailsProvider } from '@/Context/FormContext';

export default function QuoteLayout({ children }) {
  return <UserDetailsProvider>{children}</UserDetailsProvider>;
}
