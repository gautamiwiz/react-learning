import {createBrowserRouter} from 'react-router';
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

import UseRefLayout from './components/UseRefLayout';
import UseRef1 from './pages/useRef/UseRef-1';
import UseRef2 from './pages/useRef/UseRef-2';

import UseMemoLayout from './components/UseMemoLayout';
import UseMemo1 from './pages/useMemo/UseMemo-1';
import UseMemo2 from './pages/useMemo/UseMemo-2';

import UseCallbackLayout from './components/UseCallback';
import UseCallback1 from './pages/useCallback/UseCallback1';
import UseCallback2 from './pages/useCallback/UseCallback2';

// import Input1 from './pages/useStates/Input1';
import App from './App';
import Layout from './components/Layout';
import UseStateLayout from './components/UseStateLayout';
import UseEffectLayout from './components/UseEffectLayout';

import DynamicUrlParams from './pages/dynamic-url-params';
import DynamicUrlParamsChildren from './pages/DynamicUrlParamsChildren';

import UserComponent from './pages/User';
import userData from './user.json';

import UsersMultiple from './pages/UsersMultiple';

import QueueManagement from './components/Queue-managements-components/QueueManagement';

import {Navigate} from 'react-router';

//Note : Reg Hash router, if you dont have control over domain... it only does xyz.com/#/route1, xyz.com/#/route2
//Note : reg memory router, it stores the route in memory and does not read or write to address bar, it is used for testing purpose only, it does not cause page reload but it also does not change the url in address bar

//Note : Reg Hash router if needed later, you need if you do not have control over domain name
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Oops! There is some error. Please try again later.</div>,
    children: [
      {path: '/', element: <App />},
      {
        path: '/use-effect/',
        element: <UseEffectLayout />,
        children: [
          // { path: '', element: <UseEffect1 /> },
          //or
          //   { index: true, element: <UseEffect1 /> },
          {path: 'type-1', element: <UseEffect1 />},
          {path: 'type-2', element: <UseEffectJsonAPI2 />},
          {path: 'type-3', element: <UseEffectJsonAPI3 />},
          {path: 'type-4', element: <HideUnhide />},
          {path: 'type-5', element: <HideUnhideDiv />},
          {path: 'type-6', element: <UseEffectHideUnhideActivity />},
        ],
      },
      {path: '/simple', element: <UserComponent userData={userData} />},
      {path: '/multiple-cards', element: <UsersMultiple />},
      {path: '/test/*', element: <h2>Test Page</h2>},

      // { path: '*', element: <h2>Any other route says 404</h2> },
      //or

      {path: '*', element: <Navigate to="/" />},
      {
        path: '/use-state/',
        element: <UseStateLayout />,
        children: [
          {path: 'type-1', element: <UseState1 />},
          {path: 'type-2', element: <UseState2 />},
          {path: 'type-3', element: <UseState3 />},
          {path: 'type-4', element: <UseState4 />},
          {path: 'type-5', element: <UseState5 />},
          {path: 'type-6', element: <UseState6 />},
          {path: 'type-7', element: <UseState7 />},
          {path: 'type-8', element: <UseState8 />},
          {path: 'type-9', element: <UseState9 />},
        ],
      },
      {path: '/todolist', element: <ToDOList />},
      {
        path: '/dynamic/',
        element: <DynamicUrlParams />,
        children: [{path: ':id'}],
      },
      {
        path: '/use-ref/',
        element: <UseRefLayout />,
        children: [
          {path: 'use-ref-type-1', element: <UseRef1 />},
          {path: 'use-ref-type-2', element: <UseRef2 />},
        ],
      },
      {
        path: '/use-memo/',
        element: <UseMemoLayout />,
        children: [
          {path: 'use-memo-type-1', element: <UseMemo1 />},
          {path: 'use-memo-type-2', element: <UseMemo2 />},
        ],
      },
      {
        path: '/use-callback/',
        element: <UseCallbackLayout />,
        children: [
          {path: 'use-callback-type-1', element: <UseCallback1 />},
          {path: 'use-callback-type-2', element: <UseCallback2 />},
        ],
      },
      {
        path: '/queue-management/',
        element: <QueueManagement />,
      },
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
