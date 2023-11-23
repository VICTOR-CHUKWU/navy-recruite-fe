import { CSSProperties } from "react";

export type SVGIconName = 'check' | 'twitter' | 'face-book' | 'instagram'

export interface IconProps {
    name?: SVGIconName & string;
    className?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'inherit';
    crop?: boolean;
    style?: CSSProperties;
    fontSize?: string;
    children?: React.ReactNode;
}