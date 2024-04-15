'use client';

import { usePathname } from 'next/navigation';
import ServiceTemplate from '@/Templates/ServiceTemplate';
import EVData from '../../../../public/data/evcharging-data';

export default function HomeEVCharging() {
  const pathname = usePathname();
  const serviceData = EVData.filter((service) => service.slug === pathname);
  return (
    <div>
      <ServiceTemplate data={serviceData} mainColor={serviceData[0].color} />
    </div>
  );
}
