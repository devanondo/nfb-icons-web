const DropdownFillF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 24 24`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7 10L12 15L17 10H7Z" fill={fill} />
        </svg>
    );
};

export default DropdownFillF;
