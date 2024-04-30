export interface ILogoProps {
    color?: string;
    size?: number;
    strokeWidth?: number;
    gradient?: boolean;
    stopColorPrimary?: string;
    stopColorSecondary?: string;
    id?: string;
}

export interface IAnimatedLogoProps extends ILogoProps {
    animated?: boolean;
}
