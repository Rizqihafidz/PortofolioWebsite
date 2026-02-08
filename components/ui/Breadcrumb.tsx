import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface Props {
    items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: Props) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link
                href="/"
                className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
            >
                <MaterialIcon name="home" className="text-lg" />
                <span>Home</span>
            </Link>
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    <MaterialIcon name="chevron_right" className="text-slate-400 text-lg" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-slate-500 hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">
                            {item.label}
                        </span>
                    )}
                </span>
            ))}
        </nav>
    )
}
