'use client';
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type EditLinkProps = {
  href: string;
  fontSize?: string;
};

const EditProfileCard: React.FC<EditLinkProps> = ({ href, fontSize = "sm" }) => {
  return (
    <Link as={NextLink} href={href} fontSize={fontSize} alignSelf="flex-end">
      変更
    </Link>
  );
};

export default EditProfileCard;
