import { Box, Flex, Input } from '@chakra-ui/react';
import { FormikHelpers, useFormik } from 'formik';
import { validateNewsLetterFormValues as validate } from '../../functions';
import { INewsletterFormValues } from '../../models/app';
import { Button } from '../Buttons/Button';
import { IndustrySelect } from './IndustrySelect';
import { getInputStyles, submitBtnStyles } from './_styles';

const initialValues: INewsletterFormValues = {
  name: '',
  email: '',
  industry: '',
};

const onSubmit = async (
  values: INewsletterFormValues,
  actions: FormikHelpers<INewsletterFormValues>
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const NewsletterForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({ initialValues, onSubmit, validate });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="w-100">
      <Flex
        justifyContent="center"
        alignItems="center"
        display={{ md: 'block', lg: 'flex' }}
      >
        <Box w="100%" mx={1} position="relative">
          <IndustrySelect
            value={values.industry}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          {errors.industry && touched.industry && (
            <Box className="text-danger ms-2 small" position="absolute">
              {errors.industry}
            </Box>
          )}
        </Box>
        <Box w="100%" mx={1} position="relative">
          <Input
            {...getInputStyles(
              values.name,
              'text',
              'name',
              handleChange,
              handleBlur
            )}
            placeholder="Name"
          />
          {errors.name && touched.name && (
            <Box className="text-danger ms-2 small" position="absolute">
              {errors.name}
            </Box>
          )}
        </Box>
        <Box w="100%" mx={1} position="relative">
          <Input
            {...getInputStyles(
              values.email,
              'email',
              'email',
              handleChange,
              handleBlur
            )}
            placeholder="Email"
          />
          {errors.email && touched.email && (
            <Box className="text-danger ms-2 small" position="absolute">
              {errors.email}
            </Box>
          )}
        </Box>
        <Button {...submitBtnStyles} />
      </Flex>
    </form>
  );
};
