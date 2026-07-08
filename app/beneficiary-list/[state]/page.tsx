import { redirect } from 'next/navigation';

export default function OldStatePage() {
  redirect('/beneficiary-list');
}

export function generateStaticParams() {
  const states = [
    'andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh',
    'goa', 'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka',
    'kerala', 'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram',
    'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil-nadu',
    'telangana', 'tripura', 'uttar-pradesh', 'uttarakhand', 'west-bengal',
    'delhi', 'jammu-kashmir', 'ladakh', 'puducherry', 'andaman-nicobar',
    'chandigarh', 'dadra-nagar-haveli', 'daman-diu', 'lakshadweep',
  ];
  return states.map((state) => ({ state }));
}