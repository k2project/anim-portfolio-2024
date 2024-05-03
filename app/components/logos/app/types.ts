export interface ILogoProps {
    color?: string;
    size?: number | string;
    strokeWidth?: number;
    gradient?: boolean;
    stopColorPrimary?: string;
    stopColorSecondary?: string;
    id?: string;
    style?: string;
}

export interface IAnimatedLogoProps extends ILogoProps {
    animated?: boolean;
}
