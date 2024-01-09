"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const updatedErrors: FormErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      updatedErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      updatedErrors.message = 'Message should be at least 10 characters long';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full md:w-[500px] mx-auto border border-gray-800 rounded-md shadow-md p-3 md:p-5">
    {submitted ? (
      <p className="text-green-600">Message sent successfully!</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm md:text-base font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 p-1.5 w-full border-b ${
              errors.name ? 'border-red-500' : 'border-gray-500'
            } rounded`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm md:text-base font-semibold">Email</label>
          <input
            type="text"
            name="email"
            placeholder='example@email.com'
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 p-1.5 w-full border-b ${
              errors.email ? 'border-red-500' : 'border-gray-500'
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm md:text-base font-semibold">Message</label>
          <textarea
            name="message"
            rows={3}
            placeholder='your message'
            value={formData.message}
            onChange={handleInputChange}
            className={`mt-1 p-1.5 w-full border-b ${
              errors.message ? 'border-red-500' : 'border-gray-500'
            } rounded`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-slate-200 text-black text-semibold px-4 py-1.5 rounded hover:bg-slate-400 transition-colors duration-300 w-full md:w-auto"
        >
          Send Message
        </button>
      </form>
    )}
  </div>  
  );
};

export default Form;
