const localeBase = {
  navbar: {
    docs: '文档中心',
  },
  menu: {
    lang: '中文',
    dashboard: {
      index: '仪表台',
      workplace: '工作台',
      monitor: '实时监控',
    },
    errors: {
      index: '异常页',
      403: '403',
      404: '404',
      500: '500',
    },
    about: {
      index: '关于',
    },
  },
  messageBox: {
    tab: {
      title: {
        message: '消息',
        notice: '通知',
        approve: '审批',
      },
    },
    allRead: '全部已读',
  },
  exception: {
    result: {
      403: {
        description: '对不起，您没有访问该资源的权限',
        back: '返回',
      },
      404: {
        description: '抱歉，页面不见了～',
        retry: '重试',
        back: '返回',
      },
      500: {
        description: '抱歉，服务器出了点问题～',
        back: '返回',
      },
    },
  },
};

export default {
  ...localeBase,
};