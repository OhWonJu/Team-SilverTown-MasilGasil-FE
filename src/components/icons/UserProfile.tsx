interface UserProfileProps {
  size?: number | string;
}

const UserProfile = ({ size = "120" }: UserProfileProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="60"
        cy="60"
        r="60"
        fill="#D9D9D9"
      />
      <g clip-path="url(#clip0_745_1961)">
        <path
          d="M43.0709 46.6329C43.0709 37.3532 50.6606 29.8047 59.9911 29.8047C69.3215 29.8047 76.9112 37.3531 76.9112 46.6329C76.9112 55.9132 69.3215 63.4608 59.9911 63.4608C50.6606 63.4608 43.0709 55.9132 43.0709 46.6329ZM29 90.068C29.3643 85.9989 31.3284 71.5805 46.4249 63.8584C50.1692 66.7816 54.8729 68.5416 59.9911 68.5416C65.1373 68.5416 69.8666 66.7637 73.6208 63.8106C88.7826 71.5001 90.6129 85.8175 90.9822 90.0675C90.8921 90.1542 29.0895 90.0747 29 90.068Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_745_1961">
          <rect
            width="62.9333"
            height="61.8667"
            fill="white"
            transform="translate(29 28.7998)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserProfile;
