export default function LoadingSpinner({ size = 40, className = '' }) {
    return (
        <div 
            className={`loading-spinner ${className}`}
            style={{ 
                width: `${size}px`, 
                height: `${size}px`,
                borderWidth: `${size / 13.33}px`
            }}
            aria-label="Loading"
            role="status"
        >
            <span className="sr-only">Loading...</span>
        </div>
    )
}

