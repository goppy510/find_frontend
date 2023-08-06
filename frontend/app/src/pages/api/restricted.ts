import { getServerSession } from "next-auth/next"
import authOptions from "./auth/[...nextauth]";

export default async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    context.res.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    });
    return;
  }
  context.res.send({
    error: 'このページを閲覧するにはログインが必要です。',
  });
}
