import { useRouter } from 'next/navigation';

export default function useMoveBack(): () => void {
  const router = useRouter();
  const handleBack = () => router.back();
  return handleBack;
}
