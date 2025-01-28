import '@/app/_styles/globals.css';

export const metadata = {
  title: 'SITE TITLE HERE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
