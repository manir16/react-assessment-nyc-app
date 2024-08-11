import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import ArticleList from './../ArticleList';
import { Article } from './../../models/article-types';

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ArticleList Component', () => {
  const mockNavigate = useNavigate as jest.Mock;
  const articles: Article[] = [
    {
      uri: 'nyt://article/123',
      url: 'https://example.com/article-123',
      id: 123,
      asset_id: 123,
      source: 'New York Times',
      published_date: '2024-08-11',
      updated: '2024-08-12',
      section: 'World',
      subsection: 'Politics',
      nytdsection: 'world',
      adx_keywords: 'example, test',
      column: null,
      byline: 'By John Doe',
      type: 'Article',
      title: 'Test Article 1',
      abstract: 'This is a test article abstract.',
      des_facet: ['Politics'],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [],
      eta_id: 0,
    },
    {
      uri: 'nyt://article/124',
      url: 'https://example.com/article-124',
      id: 124,
      asset_id: 124,
      source: 'New York Times',
      published_date: '2024-08-10',
      updated: '2024-08-11',
      section: 'World',
      subsection: 'Economics',
      nytdsection: 'world',
      adx_keywords: 'example, test',
      column: null,
      byline: 'By Jane Doe',
      type: 'Article',
      title: 'Test Article 2',
      abstract: 'This is another test article abstract.',
      des_facet: ['Economics'],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [],
      eta_id: 0,
    },
  ];
  beforeEach(() => {
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);
   
  });

  it('renders article titles, bylines, and abstracts', () => {
    render(
      <MemoryRouter>
        <ArticleList articles={articles} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();

  });

  it('navigates to the correct article detail page on click', () => {
    render(
      <MemoryRouter>
        <ArticleList articles={articles} />
      </MemoryRouter>
    );

    const firstArticleItem = screen.getByText('Test Article 1');
    fireEvent.click(firstArticleItem);
    expect(mockNavigate).toHaveBeenCalledWith('/article/123');


  });

  it('should displays the updated date correctly', () => {
    render(
      <MemoryRouter>
        <ArticleList articles={articles} />
      </MemoryRouter>
    );

    expect(screen.getByText('2024-08-12')).toBeInTheDocument();
    expect(screen.getByText('2024-08-11')).toBeInTheDocument();
  });
});