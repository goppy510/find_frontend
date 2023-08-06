import { AccountType } from "@/features/account/types/account-types";
import AccountPage from "@/features/account/AccountPage";

// 投稿データを定義する mock
const account: AccountType = {
    id: 1,
    accountName: 'Segun Adebayo',
    avatar: "https://bit.ly/sage-adebayo",
    likes: 120,
    views: 280,
    memberViews: 50
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
