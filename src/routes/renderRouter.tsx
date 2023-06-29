import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PATH } from './paths';
import TopBar from '../component/layout/topBar';
import Footer from '../component/layout/footer';

import MobileProtectScreen from '../component/mobile-protect';
import isMobile from '../utils/new-is-mobile';
import { AuthContextProvider } from '../context/auth-context-provider';
import UseAuthPermit from '../hooks/use-auth-permit';
import { PageWrap, ContentWrap } from './styled';

export const renderRouter = () => {
  if (!isMobile()) {
    return <MobileProtectScreen />;
  }

  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* fallback을 통해 새로고침하거나 다른 route로 이동할때 보여쥴 UI 셋팅
        해줄수있다. */}
        <React.Suspense fallback={<>로딩중!!</>}>
          <Routes>
            {routes.map((route, index) => {
              const Component = route.component;
              const Guard = route.guard || React.Fragment;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Guard key={index}>
                      <PageWrap>
                        <TopBar />
                        <ContentWrap>
                          <RecoilRoot>
                            <Component />
                          </RecoilRoot>
                        </ContentWrap>
                        <Footer />
                      </PageWrap>
                    </Guard>
                  }
                />
              );
            })}
          </Routes>
        </React.Suspense>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

const routes = [
  {
    path: PATH.auth.signIn,
    component: React.lazy(() => import('../app/auth/page/sign-in')),
  },
  {
    path: PATH.home,
    component: React.lazy(() => import('../app/home/page/main')),
  },
  //
  {
    path: PATH.store.list,
    component: React.lazy(() => import('../app/store/page/list')),
  },
  {
    path: PATH.store.detail,
    component: React.lazy(() => import('../app/store/page/detail')),
  },
  {
    guard: UseAuthPermit,
    path: PATH.store.register,
    component: React.lazy(() => import('../app/store/page/register')),
  },
  //
  {
    path: PATH.group.list,
    component: React.lazy(() => import('../app/group/page/list')),
  },
  {
    guard: UseAuthPermit,
    path: PATH.group.detail,
    component: React.lazy(() => import('../app/group/page/detail')),
  },
  {
    guard: UseAuthPermit,
    path: PATH.group.register,
    component: React.lazy(() => import('../app/group/page/register')),
  },
  //
  {
    guard: UseAuthPermit,
    path: PATH.my.account,
    component: React.lazy(() => import('../app/my/account')),
  },
  {
    guard: UseAuthPermit,
    path: PATH.my.bucket,
    component: React.lazy(() => import('../app/my/bucket')),
  },
  {
    guard: UseAuthPermit,
    path: PATH.my.analysis,
    component: React.lazy(() => import('../app/my/analysis')),
  },
  {
    guard: UseAuthPermit,
    path: PATH.my.manage,
    component: React.lazy(() => import('../app/my/manage')),
  },
  //
  {
    path: '*',
    component: React.lazy(() => import('../app/error')),
  },
];
