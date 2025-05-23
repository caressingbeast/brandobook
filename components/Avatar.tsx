import { User } from '@/types';
import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

export function Avatar({
  className = '',
  user,
}: {
  className?: string;
  user: User;
}) {
  return (
    <ShadAvatar className={className}>
      <AvatarImage
        src={user.avatar || '/placeholder.svg'}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <AvatarFallback>
        {user.firstName.substring(0, 1)}
        {user.lastName.substring(0, 1)}
      </AvatarFallback>
    </ShadAvatar>
  );
}
