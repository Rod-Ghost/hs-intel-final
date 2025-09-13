import FinalCTASection from '../FinalCTASection';

export default function FinalCTASectionExample() {
  return (
    <FinalCTASection 
      onCTAClick={() => console.log('Final CTA clicked - opening registration modal')}
    />
  );
}