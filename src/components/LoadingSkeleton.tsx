// components/LoadingSkeleton.tsx

const LoadingSkeleton = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <div className="skeleton" style={{ height: '20px', width: '100px', backgroundColor: '#ccc', borderRadius: '4px' }}></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingSkeleton;
