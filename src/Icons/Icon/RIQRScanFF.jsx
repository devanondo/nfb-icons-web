const RIQRScanFF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 46 46`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.75 5.75H40.25V15.3333H36.4167V9.58333H28.75V5.75ZM17.25 5.75V9.58333H9.58333V15.3333H5.75V5.75H17.25ZM28.75 40.25V36.4167H36.4167V30.6667H40.25V40.25H28.75ZM17.25 40.25H5.75V30.6667H9.58333V36.4167H17.25V40.25ZM5.75 21.0833H40.25V24.9167H5.75V21.0833Z"
                fill={fill}
            />
        </svg>
    );
};

export default RIQRScanFF;
