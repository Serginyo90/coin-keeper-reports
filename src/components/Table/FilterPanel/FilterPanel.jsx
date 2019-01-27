import React from 'react';
import { FormSection, Field } from 'redux-form/immutable';

import Select from 'components/Select';
import { DEFAULT_FILTER_BY_CURRENCY, DEFAULT_FILTER_BY_TYPE, DEFAULT_FILTER_BY_CATEGORY } from 'helpers/constants/filter';
import FilterBlock from './FilterBlock';
import styles from './FilterPanel.module.css';

const FilterPanel = ({ 
  setFilterByCurrency,
  byCurrency, 
  tags,
  currencies,
  types,
  categories
}) => (
  <div className={styles.wrapper}>
    <Select
      label="By currency"
      options={[{ label: 'All currencies', value: DEFAULT_FILTER_BY_CURRENCY }].concat(currencies.toJS())}
      input={{
        name: "currency",
        value: byCurrency,
        onChange: e => {
          setFilterByCurrency(e.target.value);
        }
      }}
    />
    <form>
      <Field
        name="type"
        component={Select}
        label="By type"
        options={[{ label: 'All types', value: DEFAULT_FILTER_BY_TYPE }].concat(types.toJS())}
      />
      <Field
        name="category"
        component={Select}
        label="By category"
        options={[{ label: 'All categories', value: DEFAULT_FILTER_BY_CATEGORY }].concat(categories.toJS())}
      />
      <FormSection name="tags">
        <FilterBlock 
          title="By tags"
          filterItems={tags}
        />
      </FormSection>
    </form>
  </div>
)

export default FilterPanel