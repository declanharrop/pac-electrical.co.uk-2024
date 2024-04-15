'use client';

import { usePathname } from 'next/navigation';
import ServiceTemplate from '@/Templates/ServiceTemplate';
import RenewableData from '../../../../public/data/renewable-data';

export default function CommercialSolar() {
  const pathname = usePathname();
  const serviceData = RenewableData.filter(
    (service) => service.slug === pathname,
  );
  return (
    <div>
      <ServiceTemplate data={serviceData} />
    </div>
  );
}
