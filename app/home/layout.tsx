// SHARED UI

import SideNav from '../ui/home/home';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  flex-col md:w-64 md:flex-row ">
      <div className="h-screen w-full md:flex-row">
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
