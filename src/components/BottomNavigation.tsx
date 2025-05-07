
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Bookmark, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Explore', icon: Map, path: '/explore' },
    { name: 'Saved', icon: Bookmark, path: '/saved' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-lg px-2">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center",
              location.pathname === item.path 
                ? "text-ocean" 
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            <item.icon size={24} className={cn(
              location.pathname === item.path 
                ? "animate-slide-up" 
                : ""
            )} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
