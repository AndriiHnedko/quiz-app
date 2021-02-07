export type ItemConfig = {
  from: number;
  to: number;
};

export type ConfigAnimation = {
  duration?: number;
  opacity?: ItemConfig;
  translateY?: ItemConfig;
  height?: ItemConfig;
  borderRadius?: ItemConfig;
};
