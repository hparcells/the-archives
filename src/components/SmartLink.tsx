import Link from 'next/link';

function SmartLink({
  href,
  className,
  children
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (/^https?:\/\//.test(href)) {
    const isParentSite = /^https?:\/\/(www\.)?hunterparcells\.com/.test(href);
    return (
      <a
        href={href}
        target={isParentSite ? '_self' : '_blank'}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}

export default SmartLink;
