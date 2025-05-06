'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-2xl mx-auto bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-lg backdrop-blur-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Name
          </label>
          <input
            {...register('name')}
            className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-900 dark:text-gray-100 
                      focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:outline-none
                      transition-colors duration-200"
          />
          {errors.name && <p className="text-red-500 dark:text-red-400 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-900 dark:text-gray-100 
                      focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:outline-none
                      transition-colors duration-200"
          />
          {errors.email && <p className="text-red-500 dark:text-red-400 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Message
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-900 dark:text-gray-100 
                      focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:outline-none
                      transition-colors duration-200"
          />
          {errors.message && <p className="text-red-500 dark:text-red-400 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white 
                    px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center 
                    w-full disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="h-6 w-6 border-4 border-white dark:border-gray-200 border-t-transparent rounded-full animate-spin" />
          ) : (
            'Send Message'
          )}
        </button>

        {submitSuccess && (
          <p className="text-green-600 dark:text-green-400 text-center mt-4">
            Message sent successfully!
          </p>
        )}
      </div>
    </motion.form>
  );
}