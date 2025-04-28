import { GeistSans } from 'geist/font/sans'
import React from 'react';
import { cn } from '@/lib/utils';
// import Card from '@/components/Card';
// import Sidebar from '@/components/Sidebar';
import MotionHooksExample from '@/components/ui/motion-hooks';

export default function Home() {
  return (
    <div className={cn(
      'font-sans',       
    )}>
      {/* <Sidebar /> */}
      {/* <div className="flex-1 flex items-center justify-center"> */}
        {/* Main content area */}
        {/* <Card /> */}
      {/* </div> */}

      <MotionHooksExample />

    </div>
  );
}