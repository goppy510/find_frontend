import { Flex, Box} from "@/features/components";
import { AccountType } from "@/features/account/types/account_types";
import AccountPage from "@/features/account/AccountPage";

// 投稿データを定義する mock
const account: AccountType = {
    id: 1,
    creatorName: 'Segun Adebayo',
    creatorIcon: "https://bit.ly/sage-adebayo",
    like: 120,
    views: 280,
    read: 50
  }

export default function Account({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <AccountPage account={account} />
  );
}
