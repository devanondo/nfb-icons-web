const AttachmentOutlineF = ({ width = 27, height = 29, fill = '#485068' }) => {
    return (
        <svg
            style={{ width: width, height: height }}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M26.1625 9.0951C26.1658 10.2891 25.9321 11.4718 25.4751 12.5749C25.0182 13.678 24.3469 14.6795 23.5003 15.5214L12.0249 26.9967C10.8031 28.217 9.14669 28.9021 7.41986 28.9015C5.69304 28.901 4.0371 28.2147 2.81605 26.9937C1.595 25.7726 0.908773 24.1167 0.908203 22.3899C0.907634 20.663 1.59277 19.0067 2.81302 17.7848L14.4313 6.16681C14.7966 5.79871 15.231 5.50635 15.7096 5.30652C16.1881 5.10669 16.7014 5.00332 17.2201 5.00233C17.7387 5.00135 18.2523 5.10277 18.7317 5.30078C19.211 5.49878 19.6465 5.78948 20.0132 6.1562C20.3799 6.52291 20.6706 6.95842 20.8686 7.43774C21.0666 7.91706 21.168 8.43075 21.167 8.94936C21.166 9.46796 21.0626 9.98126 20.8627 10.4598C20.6629 10.9384 20.3705 11.3728 20.0024 11.738L11.1996 20.5407C11.1143 20.626 10.9986 20.6739 10.8779 20.6739C10.7572 20.6739 10.6414 20.626 10.5561 20.5407L9.26908 19.2536C9.18375 19.1683 9.13581 19.0526 9.13581 18.9319C9.13581 18.8112 9.18375 18.6954 9.26908 18.6101L18.0719 9.80749C18.1842 9.6952 18.2733 9.5619 18.3341 9.41519C18.3948 9.26848 18.4261 9.11123 18.4261 8.95243C18.4261 8.79363 18.3948 8.63638 18.3341 8.48967C18.2733 8.34296 18.1842 8.20966 18.0719 8.09737C17.8412 7.87823 17.5351 7.75605 17.2168 7.75605C16.8986 7.75605 16.5925 7.87823 16.3618 8.09737L4.74344 19.7154C4.03388 20.4249 3.63526 21.3873 3.63527 22.3908C3.63529 23.3943 4.03393 24.3567 4.74351 25.0662C5.45309 25.7758 6.41547 26.1744 7.41895 26.1744C8.42244 26.1744 9.38481 25.7757 10.0944 25.0662L21.5699 13.591C22.7623 12.3986 23.4322 10.7814 23.4321 9.09517C23.4321 7.40891 22.7623 5.79171 21.5699 4.59934C20.3775 3.40697 18.7603 2.73711 17.0741 2.73711C15.3878 2.73712 13.7706 3.40699 12.5782 4.59936L7.55896 9.61863C7.47362 9.70396 7.35787 9.75189 7.23719 9.75189C7.11651 9.75189 7.00077 9.70396 6.91542 9.61863L5.6284 8.3316C5.54307 8.24626 5.49513 8.13052 5.49513 8.00984C5.49513 7.88915 5.54307 7.77341 5.6284 7.68807L10.6477 2.66898C11.9187 1.39801 13.5381 0.532471 15.301 0.181806C17.0639 -0.16886 18.8912 0.011099 20.5519 0.698927C22.2126 1.38676 23.632 2.55156 24.6306 4.04606C25.6293 5.54056 26.1624 7.29763 26.1625 9.0951Z"
                fill={fill}
            />
        </svg>
    );
};

export default AttachmentOutlineF;
