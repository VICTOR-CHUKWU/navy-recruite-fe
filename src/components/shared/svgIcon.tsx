// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps, memo } from "react";

import { Icon, SVG } from ".";
import { SVGIconName, IconProps } from "@/types";

const _SVGIcon: FC<
    { name: SVGIconName } & IconProps &
    DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name, size, ...props }): JSX.Element => {
    return (
        <Icon {...props} name={name} size={size}>
            {(() => {
                switch (name) {
                    case "check":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-check"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </SVG>
                        );
                    case "face-book":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-facebook"
                                height="56"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </SVG>
                        );
                    case "instagram":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </SVG>
                        );
                    case "twitter":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                            </SVG>
                        )
                    default:
                        return <></>;
                }
            })()}
        </Icon>
    );
};

export const SVGIcon = memo(_SVGIcon);
