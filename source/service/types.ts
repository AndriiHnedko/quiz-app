export type ItemConfig = {
  from: number;
  to: number;
};

export type ConfigAnimation = {
  duration?: number;
  delay?: number;
  opacity?: ItemConfig;
  translateY?: ItemConfig;
  translateX?: ItemConfig;
  height?: ItemConfig;
  borderRadius?: ItemConfig;
};
