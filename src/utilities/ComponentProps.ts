import { MouseEventHandler, ReactNode } from "react";
import { ToastType } from "./EnumUtilities";

interface ButtonProps {
    description: string,
    handlerFunction: MouseEventHandler<HTMLButtonElement>
}

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: () => void;
}

interface ToastProviderProps {
    children: ReactNode;
}

interface ToastData {
    id: number;
    message: string;
    type?:  ToastType;
    duration?: number;
}
  
interface ToastContextType {
    addToast: (message: string, type?:  ToastType, duration?: number) => void;
}



export type {ButtonProps, ToastProps, ToastContextType, ToastData, ToastProviderProps}