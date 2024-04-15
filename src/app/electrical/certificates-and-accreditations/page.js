'use client';

import { usePathname } from 'next/navigation';
import ServiceTemplate from '@/Templates/ServiceTemplate';
import ElectricalData from '../../../../public/data/electrical-data';

export default function CertificatesAndAccreditationsPage() {
  const pathname = usePathname();
  const serviceData = ElectricalData.filter(
    (service) => service.slug === pathname,
  );
  return (
    <div>
      <ServiceTemplate data={serviceData} mainColor={serviceData[0].color} />
    </div>
  );
}
