import { useEffect } from "react";
import {ToastProps} from "../utilities/ComponentProps";
import React from "react";
import { ToastType } from "../utilities/EnumUtilities";

const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000, onClose }) => {
    useEffect(() => {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }, [duration, onClose]);
  
    const typeClass = {
        [ToastType.INFO]: 'alert-info',
        [ToastType.SUCCESS]: 'alert-success',
        [ToastType.WARNING]: 'alert-warning',
        [ToastType.ERROR]: 'alert-error',
      }[type];
  
    return (
      <div className={`alert ${typeClass} shadow-lg`}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    );
  };
  
  export default Toast;