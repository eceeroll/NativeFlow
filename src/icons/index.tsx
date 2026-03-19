import Svg, { Circle, Path } from "react-native-svg";

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

export const TargetIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Circle
      cx="16"
      cy="16"
      r="12"
      stroke="white"
      strokeWidth={2.5}
      fill="none"
    />
    <Circle
      cx="16"
      cy="16"
      r={7}
      stroke="white"
      strokeWidth={2.5}
      fill="none"
    />
    <Circle cx="16" cy="16" r={2.5} fill="white" />
  </Svg>
);

export const BoltIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Path
      d="M18 4L8 18H16L14 28L24 14H16L18 4Z"
      fill="white"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FlameIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
    <Path
      d="M16 28C10.477 28 6 23.523 6 18C6 13 10 10 12 7C12 7 11 13 15 13C15 13 13 9 17 6C17 6 17 11 21 12C23 13 26 15.5 26 18C26 23.523 21.523 28 16 28Z"
      fill="white"
    />
    <Path
      d="M16 24C13.791 24 12 22.209 12 20C12 18 14 17 14 17C14 17 13.5 19 15.5 19C15.5 19 14.5 18 16 16.5C16 16.5 16 19 18 19C19 19.5 20 20.5 20 21C20 22.657 18.209 24 16 24Z"
      fill="rgba(255,255,255,0.4)"
    />
  </Svg>
);

export const CheckIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      d="M3.5 9L7.5 13L14.5 5"
      stroke="white"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
