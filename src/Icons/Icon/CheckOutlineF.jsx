const CheckOutlineF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 24 24`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 12L10 18L20 6" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CheckOutlineF;
