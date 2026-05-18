import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react';

type AlertVariant = 'success' | 'info' | 'warning' | 'error';

const variantStyles: Record<AlertVariant, { className: string; Icon: typeof Info }> = {
  success: {
    className: 'bg-green-500/10 border-green-500/30 text-green-400',
    Icon: CircleCheck
  },
  info: {
    className: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    Icon: Info
  },
  warning: {
    className: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500',
    Icon: TriangleAlert
  },
  error: {
    className: 'bg-red-500/10 border-red-500/30 text-red-400',
    Icon: CircleAlert
  }
};

interface AlertProps {
  variant?: AlertVariant;
  children: React.ReactNode;
}

function Alert({ variant = 'info', children }: AlertProps) {
  const { className, Icon } = variantStyles[variant];

  return (
    <div className={`flex items-start gap-2.5 rounded-sm border px-3 py-2.5 text-sm ${className}`}>
      <Icon
        size={16}
        className='mt-0.5 shrink-0'
      />
      <div>{children}</div>
    </div>
  );
}

export default Alert;
