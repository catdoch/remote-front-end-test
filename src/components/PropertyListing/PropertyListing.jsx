import React from 'react';
import { useQuery } from '@tanstack/react-query'

import PropertyCard from '../PropertyCard';

import './PropertyListing.scss';
  
  async function fetchProperties() {
    const response = await fetch('http://localhost:3000/api/properties')
  
    if (!response.ok) {
      throw new Error('Failed to fetch properties')
    }
  
    return response.json()
  }

const PropertyListing = () => {
    const {
        data,
        isLoading,
        isError
      } = useQuery({
        queryKey: ['properties'],
        queryFn: fetchProperties,
      });

      if (isLoading) return <div>Properties loading...</div>;
      if (isError) return <div>Cannot load properties</div>;

    return (
        <ul className="PropertyListing">
            {data?.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
