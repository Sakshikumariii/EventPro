import * as Yup from 'yup';

export const bookingSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone is required'),
  eventDate: Yup.date()
    .min(new Date(), 'Date cannot be in the past')
    .required('Event Date is required'),
  eventType: Yup.string().required('Event Type is required'),
  guests: Yup.number()
    .min(1, 'At least 1 guest is required')
    .required('Number of guests is required'),
});
