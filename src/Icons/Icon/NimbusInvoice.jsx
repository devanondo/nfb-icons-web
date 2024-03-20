const NimbusInvoice = ({ width = 22, height = 22, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 22 22`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.48047 10.2712H14.713V11.9899H7.48047V10.2712ZM7.48047 13.5162H14.713V15.2349H7.48047V13.5162ZM7.48047 6.97119H14.713V8.68994H7.48047V6.97119Z"
                fill={fill}
            />
            <path
                d="M15.5928 1.375L13.2553 0.385L11.1103 1.375L8.81406 0.385L6.65531 1.375L3.38281 0V22L6.65531 20.625L8.81406 21.5737L11.1103 20.625L13.2553 21.5737L15.5928 20.625L18.6178 22V0L15.5928 1.375ZM16.8853 19.4012L15.6203 18.8375L13.2966 19.7863L11.1378 18.7962L8.82781 19.745L6.69656 18.7962L5.11531 19.4425V2.5575L6.69656 3.20375L8.82781 2.255L11.1378 3.20375L13.2966 2.255L15.6203 3.20375L16.8853 2.64V19.4012Z"
                fill={fill}
            />
        </svg>
    );
};

export default NimbusInvoice;
