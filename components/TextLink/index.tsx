import { ReactNode, FC } from "react";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TextLinkProps = {
  children: ReactNode;
  href: string;
  wrapStyle?: string;
  iconStyle?: string;
  iconColor?: string;
  addRightIcon?: IconProp;
};

/**
 * Additional Docs
 */
export const TextLink: FC<TextLinkProps> = ({
  children,
  href,
  wrapStyle,
  iconStyle,
  iconColor = "red",
  addRightIcon,
}) => {
  return (
    <Link href={href}>
      <a className={wrapStyle}>
        {children}
        {addRightIcon && (
          <FontAwesomeIcon
            icon={addRightIcon}
            color={iconColor}
            className={iconStyle}
          />
        )}
      </a>
    </Link>
  );
};
