const BackArrowFF = ({ width = 27, height = 27, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 18 18`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7803 12.9697C12.0732 13.2626 12.0732 13.7374 11.7803 14.0303C11.4874 14.3232 11.0126 14.3232 10.7197 14.0303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967L10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967C12.0732 4.26256 12.0732 4.73744 11.7803 5.03033L7.81066 9L11.7803 12.9697Z"
                fill="white"
            />
            <mask
                id="mask0_501_5385"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="6"
                height="12"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7803 12.9697C12.0732 13.2626 12.0732 13.7374 11.7803 14.0303C11.4874 14.3232 11.0126 14.3232 10.7197 14.0303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967L10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967C12.0732 4.26256 12.0732 4.73744 11.7803 5.03033L7.81066 9L11.7803 12.9697Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_501_5385)">
                <rect width="18" height="18" fill={fill} />
            </g>
        </svg>
    );
};

export default BackArrowFF;
