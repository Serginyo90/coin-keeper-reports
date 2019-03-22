import React from 'react';
import { FormSection, Field } from 'redux-form/immutable';

import Select from 'components/Select';
import DateTimePicker from 'components/DateTimePicker';
import { 
  DEFAULT_FILTER_BY_CURRENCY, 
  DEFAULT_FILTER_BY_TYPE, 
  DEFAULT_FILTER_BY_CATEGORY,
  DEFAULT_FILTER_BY_WALLET
} from 'helpers/constants/filter';
import FilterBlock from './FilterBlock';
import styles from './FilterPanel.module.css';

const FilterPanel = ({ 
  setFilterByCurrency,
  byCurrency, 
  tags,
  currencies,
  types,
  categories,
  wallets,
  datesMinAndMax
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
        className={styles.item}
      />
      <Field
        name="category"
        component={Select}
        label="By category"
        options={[{ label: 'All categories', value: DEFAULT_FILTER_BY_CATEGORY }].concat(categories.toJS())}
        className={styles.item}
      />
      <Field
        name="wallet"
        component={Select}
        label="By wallet"
        options={[{ label: 'All wallets', value: DEFAULT_FILTER_BY_WALLET }].concat(wallets.toJS())}
        className={styles.item}
      />
      <FormSection name="tags">
        <FilterBlock 
          title="By tags"
          filterItems={tags}
          className={styles.item}
        />
      </FormSection>
      <FormSection name="range">
        <Field
          name="from"
          component={DateTimePicker}
          label="From"
          defaultValue={datesMinAndMax.get('min')}
          min={datesMinAndMax.get('min')}
          max={datesMinAndMax.get('max')}
          className={styles.item}
        />
        <Field
          name="to"
          component={DateTimePicker}
          label="To"
          defaultValue={datesMinAndMax.get('max')}
          min={datesMinAndMax.get('min')}
          max={datesMinAndMax.get('max')}
          className={styles.item}
        />
      </FormSection>
    </form>
  </div>
)

export default FilterPanel