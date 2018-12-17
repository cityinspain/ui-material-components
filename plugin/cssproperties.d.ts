import { CssProperty } from 'tns-core-modules/ui/core/properties';
import { Color } from 'tns-core-modules/ui/core/view';
import { Style } from 'tns-core-modules/ui/styling/style';
export declare const cssProperty: (target: Object, key: string | symbol) => void;
export declare const rippleColorProperty: CssProperty<Style, Color>;
export declare const errorColorProperty: CssProperty<Style, Color>;
export declare const helperProperty: CssProperty<Style, string>;
export declare const errorProperty: CssProperty<Style, string>;
export declare const maxLengthProperty: CssProperty<Style, number>;
export declare const floatingProperty: CssProperty<Style, boolean>;
export declare const elevationProperty: CssProperty<Style, number>;
export declare const variantProperty: CssProperty<Style, string>;
export declare const trackBackgroundColorProperty: CssProperty<Style, Color>;
