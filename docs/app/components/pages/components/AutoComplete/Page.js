// @flow weak
/* eslint import/no-webpack-loader-syntax: 0 */

import React from 'react';
import Title from 'react-title-component';

import autoCompleteCode from '!raw-loader!resonance/Surface/Surface';

import autoCompleteExampleSimpleCode from '!raw-loader!./ExampleSimple';
import autoCompleteExampleDataSourcesCode from '!raw-loader!./ExampleDataSources';
import autoCompleteExampleFiltersCode from '!raw-loader!./ExampleFilters';
import autoCompleteExampleControlledCode from '!raw-loader!./ExampleControlled';

import AutoCompleteExampleSimple from './ExampleSimple';
import AutoCompleteExampleDataSources from './ExampleDataSources';
import AutoCompleteExampleFilters from './ExampleFilters';
import AutoCompleteExampleControlled from './ExampleControlled';

import CodeExample from '../../../CodeExample';
import autoCompleteReadmeText from './README.md';
import MarkdownElement from '../../../MarkdownElement';
import PropTypeDescription from '../../../PropTypeDescription';

const AutoCompletesPage = () => (
  <div>
    <Title render={(previousTitle) => `Auto Complete - ${previousTitle}`} />
    <MarkdownElement text={autoCompleteReadmeText} />
    <CodeExample
      code={autoCompleteExampleSimpleCode}
      title="Simple example"
    >
      <AutoCompleteExampleSimple />
    </CodeExample>
    <CodeExample
      code={autoCompleteExampleDataSourcesCode}
      title="Data sources"
    >
      <AutoCompleteExampleDataSources />
    </CodeExample>
    <CodeExample
      code={autoCompleteExampleFiltersCode}
      title="Filters"
    >
      <AutoCompleteExampleFilters />
    </CodeExample>
    <CodeExample
      code={autoCompleteExampleControlledCode}
      title="Controlled example"
    >
      <AutoCompleteExampleControlled />
    </CodeExample>
    <PropTypeDescription code={autoCompleteCode} />
  </div>
);

export default AutoCompletesPage;
