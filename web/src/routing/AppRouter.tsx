import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { DataSetEditPage, IndexPage, DataSetListPage, DataSetDetailsPage, DataSetCreatePage } from '../pages';
import { PATH } from './path';

const appRouter = createBrowserRouter([
  {
    path: PATH.INDEX,
    element: <IndexPage />,
  },
  {
    path: PATH.DATA_SET_LIST,
    element: <DataSetListPage />,
  },
  {
    path: PATH.DATA_SET_DETAILS,
    element: <DataSetDetailsPage />
  },
  {
    path: PATH.DATA_SET_EDIT,
    element: <DataSetEditPage />
  },
  {
    path: PATH.DATA_SET_NEW,
    element: <DataSetCreatePage />
  },
]);

export const AppRouter = () =>
  <RouterProvider router={ appRouter } />;
