const ParkPeopleSafeFF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 22 22`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_501_4383"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="20"
                height="22"
            >
                <path
                    d="M2.75 4.2425L11.0041 1.8335L19.25 4.2425V9.18241C19.25 14.3744 15.9271 18.5255 11.0014 20.1668C6.07429 18.526 2.75 14.3735 2.75 9.18012V4.2425Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.0007 10.5418C12.2663 10.5418 13.2923 9.51582 13.2923 8.25016C13.2923 6.98451 12.2663 5.9585 11.0007 5.9585C9.735 5.9585 8.70898 6.98451 8.70898 8.25016C8.70898 9.51582 9.735 10.5418 11.0007 10.5418Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.6673 14.2087C14.6673 13.2362 14.281 12.3036 13.5934 11.6159C12.9057 10.9283 11.9731 10.542 11.0007 10.542C10.0282 10.542 9.09556 10.9283 8.40793 11.6159C7.72029 12.3036 7.33398 13.2362 7.33398 14.2087"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </mask>
            <g mask="url(#mask0_501_4383)">
                <path d="M0 0H22V22H0V0Z" fill={fill} />
            </g>
        </svg>
    );
};

export default ParkPeopleSafeFF;
