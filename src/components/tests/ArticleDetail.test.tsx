import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import ArticleDetail from './../ArticleDetail';
import { Article } from './../../models/article-types';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('ArticleDetail Component', () => {
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
  ];

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '123' });
  });

  it('renders article details when article is found', () => {
    render(<ArticleDetail articles={articles} />);
    expect(screen.getByText('Detail Page')).toBeInTheDocument();
    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('This is a test article abstract.')).toBeInTheDocument();   
    expect(screen.getByText('2024-08-12')).toBeInTheDocument();
  });

  it('renders "Article not found" when article does not exist', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '999' }); 
    render(<ArticleDetail articles={articles} />);
    expect(screen.getByText('Article not found')).toBeInTheDocument();
  });
});