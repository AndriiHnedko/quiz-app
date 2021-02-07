import {ConfigAnimation} from './types';

export const defaultConfigAnimations = (
  config?: ConfigAnimation,
): ConfigAnimation => {
  const defaultValue = {from: 0, to: 0};
  return {
    duration: config?.duration ? config.duration : 0,
    opacity: config?.opacity ? config.opacity : defaultValue,
    translateY: config?.translateY ? config.translateY : defaultValue,
    height: config?.height ? config.height : defaultValue,
    borderRadius: config?.borderRadius ? config.borderRadius : defaultValue,
  };
};
