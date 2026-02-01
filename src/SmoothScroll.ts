import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {

    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const href = target.getAttribute('href');
        if (!href) return;
        
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = 80; // Altura do header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
};

export default useSmoothScroll;