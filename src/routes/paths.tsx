type PathType = {
  auth: {
    signIn: string;
    signUp: string;
  };
  home: string;
  store: {
    list: string;
    detail: string;
    register: string; //StoreAuth
  };
  group: {
    list: string;
    detail: string; //UserAuth
    register: string; //UserAuth
  };
  my: {
    account: string; //UserAuth
    bucket: string; //UserAuth
    analysis: string; //StoreAuth
    manage: string; //StoreAuth
  };
};

export const PATH: PathType = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  home: '/',
  store: {
    list: '/store/list',
    detail: '/store/:id/',
    register: '/store/:id?/register/:tab(add|edit)?',
  },
  group: {
    list: '/group/list/',
    detail: '/group/detail/:id',
    register: '/group/:id?/register/:tab(add|edit)?',
  },
  my: {
    account: '/my/account',
    bucket: '/my/bucket',
    analysis: '/my/analysis',
    manage: '/my/manage',
  },
};
