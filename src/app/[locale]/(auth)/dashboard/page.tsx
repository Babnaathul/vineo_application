// import { getTranslations } from 'next-intl/server';

// import { Hello } from '@/components/Hello';

// export async function generateMetadata(props: { params: { locale: string } }) {
//   const t = await getTranslations({
//     locale: props.params.locale,
//     namespace: 'Dashboard',
//   });

//   return {
//     title: t('meta_title'),
//   };
// }

// const Dashboard = () => (
//   <div className="[&_p]:my-6">
//     <Hello />
//   </div>
// );

// export default Dashboard;
export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
      <p className="text-lg mt-4">You have successfully logged in.</p>
    </div>
  );
}
