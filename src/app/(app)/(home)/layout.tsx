import HomeHeader from "@/components/home-header/home-header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-bgColor-light dark:bg-bgColor-dark">
      <HomeHeader />
      <div className="pt-16"> {children}</div>
    </div>
  );
};

export default HomeLayout;
