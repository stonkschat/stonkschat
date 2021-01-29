import { CommentsGridPage } from './CommentsGridPage';

import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    // TODO AppProviders
    <QueryClientProvider client={queryClient}>
      {/* TODO router */}
      <CommentsGridPage />
    </QueryClientProvider>
  );
}

export default App;
