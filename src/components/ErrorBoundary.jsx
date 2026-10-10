import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary captured an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
          <div className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h1 className="mb-2 text-2xl font-extrabold">حدث خلل في التطبيق</h1>
            <p className="text-slate-300">
              نعتذر، لكن حدثت مشكلة غير متوقعة في واجهة الديوان. يُرجى إعادة تحميل الصفحة أو المحاولة لاحقاً.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
