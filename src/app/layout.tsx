// import '../styles/global.css'; // Adjust the path to your global CSS file

// export const metadata = {
//   title: 'Your App Title',
//   description: 'Your App Description',
// };

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-50">{children}</body>
//     </html>
//   );
// };

// export default RootLayout;
import '../styles/global.css'; // Import global styles here

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
};

export default RootLayout;
