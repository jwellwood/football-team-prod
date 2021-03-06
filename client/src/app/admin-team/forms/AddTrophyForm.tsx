import React from 'react';
import { useForm } from 'react-hook-form';
//MUI
import Grid from '@material-ui/core/Grid';
// Internal
import { SubmitButton } from 'components/buttons';
import { TextInput, SelectInput, CustomSwitch } from 'components/inputs';
import { FormContainer } from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import { trophyWinnerOptions } from '../utils';
import { yearOptions } from 'utils/helpers';
import { button_text } from 'constants/text';

interface Props {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input?: any; // TODO
  loading: boolean;
  disabled?: boolean;
}

const AddTrophyForm: React.FC<Props> = ({
  onSubmit,
  onChange,
  input,
  loading,
  onCheck,
}) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid dir='row'>
          <Grid item xs={12} sm={6}>
            <TextInput
              inputName='name'
              label='Name'
              defaultValue={input.name}
              onChange={onChange}
              validators={register({
                required: true,
                minLength: 2,
                maxLength: 30,
              })}
              errors={errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              inputName='year'
              label='Year'
              defaultValue={input.year}
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.year}
              options={yearOptions()}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              inputName='isWinner'
              defaultValue={input.isWinner}
              label='Place'
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.isWinner}
              options={trophyWinnerOptions}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSwitch
              name='isFinal'
              color='primary'
              defaultValue={input.isFinal}
              onCheck={onCheck}
              label='Cup Final'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {input.isFinal ? (
              <TextInput
                inputName='opponent'
                label='Vs'
                defaultValue={input.opponent}
                onChange={onChange}
                validators={register({
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                errors={errors.opponent}
              />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              inputName='description'
              label='Comments'
              defaultValue={input.description}
              onChange={onChange}
              validators={register({ maxLength: 999 })}
              errors={errors.description}
            />
          </Grid>
        </CenteredGrid>
        <SubmitButton loading={loading}>{button_text.ADD}</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AddTrophyForm;
