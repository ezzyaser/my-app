import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import type { Metadata } from 'next';
import Progres from '@/app/Languag/components/Progres';
export const metadata: Metadata = {
  title: 'Languages✈',
  description: 'For Learn some languages for you',
};

export default function page() {
  return (
    <MaxWidthWrapper>
      <Progres />
    </MaxWidthWrapper>
  );
}
