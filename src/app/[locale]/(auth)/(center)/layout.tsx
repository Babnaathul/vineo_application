// import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';

// export default function CenteredLayout(props: { children: React.ReactNode }) {
//   const { userId } = auth();

//   if (userId) {
//     redirect('/dashboard');
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       {props.children}
//     </div>
//   );
// }
const CenterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {children}
    </div>
  );
};

export default CenterLayout;
