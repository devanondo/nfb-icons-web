const TextDescriptionF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 20 20`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_33_466)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 4.6875C0 4.43886 0.098772 4.2004 0.274587 4.02459C0.450403 3.84877 0.68886 3.75 0.9375 3.75H19.0625C19.3111 3.75 19.5496 3.84877 19.7254 4.02459C19.9012 4.2004 20 4.43886 20 4.6875C20 4.93614 19.9012 5.1746 19.7254 5.35041C19.5496 5.52623 19.3111 5.625 19.0625 5.625H0.9375C0.68886 5.625 0.450403 5.52623 0.274587 5.35041C0.098772 5.1746 0 4.93614 0 4.6875ZM0 10C0 9.75136 0.098772 9.5129 0.274587 9.33709C0.450403 9.16127 0.68886 9.0625 0.9375 9.0625H19.0625C19.3111 9.0625 19.5496 9.16127 19.7254 9.33709C19.9012 9.5129 20 9.75136 20 10C20 10.2486 19.9012 10.4871 19.7254 10.6629C19.5496 10.8387 19.3111 10.9375 19.0625 10.9375H0.9375C0.68886 10.9375 0.450403 10.8387 0.274587 10.6629C0.098772 10.4871 0 10.2486 0 10ZM0.9375 14.375C0.68886 14.375 0.450403 14.4738 0.274587 14.6496C0.098772 14.8254 0 15.0639 0 15.3125C0 15.5611 0.098772 15.7996 0.274587 15.9754C0.450403 16.1512 0.68886 16.25 0.9375 16.25H12.8125C13.0611 16.25 13.2996 16.1512 13.4754 15.9754C13.6512 15.7996 13.75 15.5611 13.75 15.3125C13.75 15.0639 13.6512 14.8254 13.4754 14.6496C13.2996 14.4738 13.0611 14.375 12.8125 14.375H0.9375Z"
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_33_466">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default TextDescriptionF;