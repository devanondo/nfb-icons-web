const UploadOutlineF = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 17 17`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.41797 12.0417L1.85784 13.8019C1.93445 14.1084 2.1113 14.3804 2.36029 14.5749C2.60927 14.7693 2.9161 14.875 3.23201 14.875H13.7706C14.0865 14.875 14.3933 14.7693 14.6423 14.5749C14.8913 14.3804 15.0682 14.1084 15.1448 13.8019L15.5846 12.0417M8.5013 2.125V10.625V2.125ZM8.5013 2.125L5.66797 4.95833L8.5013 2.125ZM8.5013 2.125L11.3346 4.95833L8.5013 2.125Z"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default UploadOutlineF;
