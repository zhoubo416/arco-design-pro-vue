/* eslint-disable no-console */

/* 打印警告 */

/** 打印log */
export function consoleLog(message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
}

/** 打印警告 */
export function consoleWarn(message?: any, ...optionalParams: any[]) {
  console.warn(message, ...optionalParams);
}

/** 打印错误 */
export function consoleError(message?: any, ...optionalParams: any[]) {
  console.error(message, ...optionalParams);
}

export function openWindow(
  url: string,
  opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean }
) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');

  window.open(url, target, feature.join(','));
}
