import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import LanguageProgres from '@/components/LanguageProgres';
export const metadata = {
  title: 'اللغات🌍',
  description: 'For Learn some languages for you',
};

export default function Page() {
  return (
    <MaxWidthWrapper>
      <LanguageProgres />
    </MaxWidthWrapper>
  );
}
