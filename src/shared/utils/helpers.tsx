import {Platform} from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export const transformAPIData = (data: any, replaceKey: string) => {
  return data.map((item: any) => {
    const labelValue = item[replaceKey];
    return {
      ...item,
      label: labelValue,
      value: labelValue,
    };
  });
};

export const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
