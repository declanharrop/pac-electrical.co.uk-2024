'use client';

import { usePathname } from 'next/navigation';
import Data from 'data/electrical-data';
import ServiceTemplate from '@/Templates/ServiceTemplate';

export default function LargerDomesticInstall() {
  const pathname = usePathname();
  const serviceData = Data.filter((service) => service.slug === pathname);
  return (
    <div>
      <ServiceTemplate data={serviceData} mainColor={serviceData[0].color} />
    </div>
  );
}
