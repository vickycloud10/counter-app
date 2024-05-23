import React, { useState, useCallback, createContext, useContext } from 'react';
import Toast from './Toast';
import { ToastContextType, ToastData, ToastProviderProps } from '../utilities/ComponentProps';
import { ToastType } from '../utilities/EnumUtilities';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastContainer');
  }
  return context;
};

export const ToastContainer: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((message: string, type: ToastType = ToastType.INFO, duration: number = 3000) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div className="toast toast-top toast-center">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContainer;
