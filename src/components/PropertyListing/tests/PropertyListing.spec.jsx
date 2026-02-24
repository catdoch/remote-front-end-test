import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import { properties } from './test-utilities';

const mockedUseQuery = useQuery;

jest.mock('@tanstack/react-query', () => ({
    useQuery: jest.fn(),
    QueryClientProvider: ({ children }) => children,
}));

const createQueryResult = (overrides = {}) =>
({
    isPending: false,
    error: null,
    data: undefined,
    ...overrides,
});

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        mockedUseQuery
            .mockReturnValueOnce(createQueryResult({ data: properties }));

        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
