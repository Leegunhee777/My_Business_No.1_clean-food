type PathType = {
  home: string;
  auth: {
    signIn: string;
    signUp: string;
  };
  store: {
    list: string;
    detail: string;
    register: string; //StoreAuth
  };
  my: {
    account: string;
    bucket: string;
    analysis: string; //StoreAuth
    manage: string;
  };
  group: {
    list: string;
    detail: string;
    register: string;
  };
};

export const PATH: PathType = {
  home: '/',
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  store: {
    list: '/store/list',
    detail: '/store/:id/',
    register: '/store/:id?/register/:tab(add|edit)?',
  },
  my: {
    account: '/my/account',
    bucket: '/my/bucket',
    analysis: '/my/analysis',
    manage: '/my/manage',
  },
  group: {
    list: '/group/list/',
    detail: '/group/detail/:id',
    register: '/group/:id?/register/:tab(add|edit)?',
  },
};
