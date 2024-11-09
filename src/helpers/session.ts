class Session {
  static instance = new Session();
  token: string | null = null;

  constructor() {
    if (Session.instance) {
      return Session.instance;
    }
    Session.instance = this;
  }

  set(value: string) {
    this.token = value;
    // 브라우저 환경에서만 localStorage 사용
    if (typeof window !== 'undefined') {
      localStorage.setItem('session', value);
    }
  }

  get() {
    if (!this.token && typeof window !== 'undefined') {
      this.token = localStorage.getItem('session');
    }
    return this.token;
  }

  static get() {
    return Session.instance.get();
  }

  static set(value: string) {
    Session.instance.set(value);
  }
}

const session = new Session();
export default session;
