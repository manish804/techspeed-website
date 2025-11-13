export default function LoadingSkeleton({ 
    lines = 1, 
    width = '100%', 
    height = '1rem',
    className = '',
    dark = false 
}) {
    return (
        <div className={`${dark ? 'skeleton-dark' : 'skeleton'} ${className}`} style={{ width, height }}>
            {Array.from({ length: lines }).map((_, index) => (
                <div
                    key={index}
                    className={dark ? 'skeleton-dark' : 'skeleton'}
                    style={{
                        width: index === lines - 1 ? '80%' : '100%',
                        height: height,
                        marginBottom: index < lines - 1 ? '0.5rem' : '0',
                        borderRadius: '4px'
                    }}
                />
            ))}
        </div>
    )
}

export function CardSkeleton({ dark = false }) {
    return (
        <div className={`p-6 rounded-lg ${dark ? 'bg-gray-800' : 'bg-white'} card-elevated`}>
            <div className={`${dark ? 'skeleton-dark' : 'skeleton'} h-6 w-3/4 mb-4 rounded`} />
            <div className={`${dark ? 'skeleton-dark' : 'skeleton'} h-4 w-full mb-2 rounded`} />
            <div className={`${dark ? 'skeleton-dark' : 'skeleton'} h-4 w-5/6 mb-4 rounded`} />
            <div className="flex gap-2">
                <div className={`${dark ? 'skeleton-dark' : 'skeleton'} h-8 w-20 rounded`} />
                <div className={`${dark ? 'skeleton-dark' : 'skeleton'} h-8 w-20 rounded`} />
            </div>
        </div>
    )
}

