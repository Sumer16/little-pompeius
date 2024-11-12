// This approach was used because we are using the app folder and not the pages folder as a starting point
import NextAuth from 'next-auth/next';

import { authOptions } from '@/utils/auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
