import { FC } from "react";
import Image from "next/image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Button, TextLink } from "..";

export type NavContent = {
  id: number;
  content: string;
  href: string;
  rightIcon?: IconProp;
};

type NavbarProps = {
  navContents: NavContent[];
};

/**
 * Additional Docs
 */
export const Navbar: FC<NavbarProps> = ({ navContents }) => {
  return (
    <div>
      <div className="text-black py-4 px-16">
        <div className="flex justify-between">
          <div className="block md:hidden">
            <Image src="/logo_small.svg" alt="logo" height={46} width={46} />
          </div>
          <div className="hidden md:block">
            <Image src="/logo.svg" alt="logo" height={46} width={365} />
          </div>

          <Button type="button">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hiro9108/Jamstack"
            >
              See Github
            </a>
          </Button>
        </div>
      </div>
      <div className="text-black bg-red-50 py-4 px-16">
        <div className="flex items-center">
          {navContents.map((navContent) => (
            <TextLink
              key={navContent.id}
              href={navContent.href}
              wrapStyle="mr-6 lg:mr-12 min-w-96"
              iconStyle="ml-2"
              addRightIcon={navContent.rightIcon}
            >
              {navContent.content}
            </TextLink>
          ))}
        </div>
      </div>
    </div>
  );
};
