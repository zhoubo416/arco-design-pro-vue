import { withInstall } from '@/utils';

import appLogo from './src/AppLogo.vue';
import appDarkModeSwitch from './src/AppDarkModeSwitch.vue';

export const AppLogo = withInstall(appLogo);
export const AppDarkModeSwitch = withInstall(appDarkModeSwitch);
