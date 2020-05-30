import React from 'react';
import { useForm } from 'react-hook-form';
// MUI
import Grid from '@material-ui/core/Grid';
// Internal
import FormContainer from 'containers/FormContainer';
import Spinner from 'components/ui/loading/Spinner';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import NumberInput from 'components/ui/inputs/NumberInput';
import TextInput from 'components/ui/inputs/TextInput';
import SelectInput from 'components/ui/inputs/SelectInput';
import { positionOptions } from 'components/utils/select-options';

const EditPlayerForm = ({ onChange, onSubmit, loading, disabled, input }) => {
  const { handleSubmit, errors, register } = useForm();
  const playerForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredGrid dir='row'>
        <Grid item xs={12}>
          <TextInput
            inputName='name'
            defaultValue={input.name}
            onChange={onChange}
            label='Name'
            validators={register({
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            errors={errors.name || null}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NumberInput
            inputName='squadNumber'
            defaultValue={input.squadNumber}
            onChange={onChange}
            label='Squad Number'
            validators={register({ required: true, min: 1, max: 99 })}
            errors={errors.squadNumber || null}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <SelectInput
            inputName='position'
            label='Position'
            defaultValue={input.position || ''}
            onChange={onChange}
            options={positionOptions}
            validators={register({ required: true })}
            errors={errors.position || null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            inputName='description'
            multiline
            defaultValue={input.description}
            onChange={onChange}
            label='Description'
            validators={register({ maxLength: 150 })}
            errors={errors.description || null}
          />
        </Grid>
      </CenteredGrid>
      <SubmitButton disabled={disabled} loading={loading} />
    </form>
  );

  return !loading ? <FormContainer>{playerForm}</FormContainer> : <Spinner />;
};

export default EditPlayerForm;
