import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { router } from './routes';
import './i18n'
import 'sonner/dist/styles.css';

export default function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toaster position="top-right" richColors />
    </>
  );
}
