/**
 * Loader Component
 * Professional loading spinner
 */

export default function Loader({ size = 'md', text = 'Loading...' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-75 animate-pulse"></div>
        <div className={`${sizeClasses[size]} bg-white rounded-full animate-spin`}>
          <div className="absolute inset-1 bg-gray-100 rounded-full"></div>
        </div>
      </div>
      {text && <p className="text-sm text-gray-600 font-medium">{text}</p>}
    </div>
  );
}
