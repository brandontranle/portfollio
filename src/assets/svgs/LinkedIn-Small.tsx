const LinkedInSmall = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={40}
      height={37}
      fill="none"
    >
      <path fill="url(#a)" d="M0 0h40v36.923H0z" />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.0026 0 0 .00282 0 -.042)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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IYAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhiIoAw1G4NIQA3lEVWhAAQQFhi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"
          id="b"
          width={384}
          height={384}
        />
      </defs>
    </svg>
  );
};
export default LinkedInSmall;
