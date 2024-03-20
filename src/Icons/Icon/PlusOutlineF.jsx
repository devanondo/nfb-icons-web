const PlusOutlineF = ({ width = 20, height = 20, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.8337 10.8317H10.8337V15.8317H9.16699V10.8317H4.16699V9.16504H9.16699V4.16504H10.8337V9.16504H15.8337V10.8317Z"
                fill={fill}
                fillOpacity="1"
            />
            <rect x="1" y="1" width="18" height="18" rx="4" stroke={fill} strokeOpacity="1" strokeWidth="2" />
        </svg>
    );
};

export default PlusOutlineF;
