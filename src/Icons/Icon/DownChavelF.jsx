const DownChavelF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 24 24`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289Z"
                fill={fill}
            />
            <mask
                id="mask0_301_2402"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="5"
                y="8"
                width="14"
                height="8"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_301_2402)">
                <rect y="24" width="24" height="24" transform="rotate(-90 0 24)" fill="#0D1F3C" />
            </g>
        </svg>
    );
};

export default DownChavelF;
