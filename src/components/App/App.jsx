import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const queryClient = new QueryClient();

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <QueryClientProvider client={queryClient}>
                    <PropertyListing />
                </QueryClientProvider>
            </main>
        </div>
    );
};

export default App;
