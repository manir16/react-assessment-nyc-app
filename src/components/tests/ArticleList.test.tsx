import React from 'react';
import { render, screen } from '@testing-library/react';


import ArticleList from './../ArticleList';
import { Article } from './../../models/article-types';

describe('ArticleList', () => {
  const articles: Article[] = [
    {
      uri: 'uri1',
      url: 'url1',
      id: 1,
      asset_id: 1,
      source: 'source1',
      published_date: '2024-08-07',
      updated: '2024-08-07',
      section: 'testsection1',
      subsection: 'testsubsection1',
      nytdsection: 'test 1',
      adx_keywords: 'testkeywords1',
      column: null,
      byline: 'byline1',
      type: 'type1',
      title: 'Title 1',
      abstract: 'Abstract 1',
      des_facet: ['facet1'],
      org_facet: ['org1'],
      per_facet: ['person1'],
      geo_facet: ['geo1'],
      media: [],
      eta_id: 1,
    },
 
  ];

  it('renders a list of articles with title', () => {
    render(<ArticleList articles={articles} />);

    // Check that titles are rendered
    expect(screen.getByText('Title 1')).toBeInTheDocument();


  });
});