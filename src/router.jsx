import { createBrowserRouter } from 'react-router';
import ToDOList from './pages/ToDoList/ToDoList';
import UseEffect1 from './pages/useEffect/UseEffect-1';
import UseEffectJsonAPI2 from './pages/useEffect/UseEffectJsonAPI-2';
import UseEffectJsonAPI3 from './pages/useEffect/UseEffectJsonAPI-3';
import UseEffectHideUnhideActivity from './pages/useEffect/useEffectHideUnhide-Activity/UseEffectHideUnhideActivity';
import HideUnhide from './pages/useEffect/useEffectHideUnhide/HideUnhide';
import HideUnhideDiv from './pages/useEffect/useEffectHideUnhide-Div/HideUnhideDiv';

import UseState1 from './pages/useStates/UseState-1';
import UseState2 from './pages/useStates/UseState-2';
import UseState3 from './pages/useStates/UseState-3';
import UseState4 from './pages/useStates/UseState-4';
import UseState5 from './pages/useStates/UseState-5';
import UseState6 from './pages/useStates/UseState-6';
import UseState7 from './pages/useStates/UseState-7';
import UseState8 from './pages/useStates/UseState-8';
import UseState9 from './pages/useStates/UseState-9';

// import Input1 from './pages/useStates/Input1';
import App from './App';
import Layout from './components/Layout';
import UseStateLayout from './components/UseStateLayout';
import UseEffectLayout from './components/UseEffectLayout';

import DynamicUrlParams from './pages/dynamic-url-params';
import DynamicUrlParamsChildren from './pages/DynamicUrlParamsChildren';

//Note : Reg Hash router if needed later, you need if you do not have control over domain name
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Oops! There is some error. Please try again later.</div>,
    children: [
      { path: '/', element: <App /> },

      {
        path: '/use-effect/',
        element: <UseEffectLayout />,
        children: [
          // { path: '', element: <UseEffect1 /> },
          //or
          //   { index: true, element: <UseEffect1 /> },
          { path: 'type-1', element: <UseEffect1 /> },
          { path: 'type-2', element: <UseEffectJsonAPI2 /> },
          { path: 'type-3', element: <UseEffectJsonAPI3 /> },
          { path: 'type-4', element: <HideUnhide /> },
          { path: 'type-5', element: <HideUnhideDiv /> },
          { path: 'type-6', element: <UseEffectHideUnhideActivity /> },
        ],
      },

      {
        path: '/use-state/',
        element: <UseStateLayout />,
        children: [
          { path: 'type-1', element: <UseState1 /> },
          { path: 'type-2', element: <UseState2 /> },
          { path: 'type-3', element: <UseState3 /> },
          { path: 'type-4', element: <UseState4 /> },
          { path: 'type-5', element: <UseState5 /> },
          { path: 'type-6', element: <UseState6 /> },
          { path: 'type-7', element: <UseState7 /> },
          { path: 'type-8', element: <UseState8 /> },
          { path: 'type-9', element: <UseState9 /> },
        ],
      },
      { path: '/todolist', element: <ToDOList /> },
      { path: '/dynamic/', element: <DynamicUrlParams />, children: [{ path: ':id', element: <DynamicUrlParamsChildren /> }] },
    ],
  },
]);

//===========
// alternative way
//===========

// import { createRoutesFromElements, Route } from 'react-router';
// export const routerAlternate = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/alternate1" element={<App />} />
//       <Route path="/alternate2" element={<ToDOList />} />
//     </>,
//   ),
// );
