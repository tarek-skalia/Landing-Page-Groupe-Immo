import React from 'react';

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  badge?: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface CommuneConfig {
  name: string;
  zip: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  localVibe: string; // Text about the local market
}