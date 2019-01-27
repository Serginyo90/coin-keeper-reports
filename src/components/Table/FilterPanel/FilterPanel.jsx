import React from 'react';
import { FormSection, Field } from 'redux-form/immutable';

import Select from 'components/Select';
import { DEFAULT_FILTER_BY_CURRENCY, DEFAULT_FILTER_BY_TYPE } from 'helpers/constants/filter';
import FilterBlock from './FilterBlock';
import styles from './FilterPanel.module.css';

const FilterPanel = ({ 
  setFilterByCurrency,
  byCurrency, 
  tags,
  currencies,
  types
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
        options={[{ label: 'All types', value: DEFAULT_FILTER_BY_TYPE }].concat(types.toJS())}
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